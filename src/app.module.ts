import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DailycoClientModule } from 'dailyco-api-client/dist';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    DailycoClientModule.forRoot({
      apikey: process.env.DAILYCO_API_KEY,
      apiurl: process.env.DAILYCO_API_URL,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
