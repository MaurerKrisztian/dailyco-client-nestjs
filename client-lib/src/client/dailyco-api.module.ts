import {DynamicModule, Global, Module, Type} from "@nestjs/common";
import {DailycoApiClient} from "./dailyco-api.client";

export interface IDailycoModuleOptions {
    apikey: string,
    apiurl: string
}

export interface OptionsFactory<T> {
    createOptions(): Promise<T> | T;
}


@Global()
@Module({})
export class DailycoClientModule {
    static forRoot(options: IDailycoModuleOptions): DynamicModule {
        return {
            module: DailycoClientModule,
            controllers: [],
            providers: [
                DailycoApiClient,
                {
                    provide: 'API_OPTIONS',
                    useValue: options,
                },
            ],
            exports: [DailycoApiClient],
            imports: [],
        };
    }

    static forRootAsync(classForOptions: Type<IDailycoModuleOptions>): DynamicModule {
        return {
            module: DailycoClientModule,
            controllers: [],
            providers: [
                DailycoApiClient,
                {
                    provide: 'API_OPTIONS',
                    useFactory: async (optionsFactory: OptionsFactory<IDailycoModuleOptions>) =>
                        await optionsFactory.createOptions(),
                    inject: [classForOptions as Type<IDailycoModuleOptions>],
                },
                {
                    provide: classForOptions,
                    useClass: classForOptions,
                },
            ],
            exports: [DailycoApiClient],
            imports: [],
        };
    }
}
