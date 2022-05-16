# Dailyco api client

Api client for working with Dailyco api in NestJs
```sh
npm i @maurerkrisztian/dailyco-api-client
```

```typescript
    DailycoClientModule.forRoot({
    apikey: process.env.DAILYCO_API_KEY,
    apiurl: process.env.DAILYCO_API_URL,
})
```

### DailycoApiClient
```typescript
createRoom(roomOptions: IRoomOptions): Promise<INewRoomResponse>;
deleteRoom(roomName: string): Promise<IDeleteRoomResponse>;
getRoom(roomName: string): Promise<IAllRoomResponse>;
getAllRoom(): Promise<IAllRoomResponse>;
deleteAllRoom(): Promise<any>;
```


