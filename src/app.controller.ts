import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DailycoApiClient, IRoomOptions } from 'dailyco-api-client';

@Controller()
export class AppController {
  constructor(private readonly videoCallClient: DailycoApiClient) {}

  @Get(':name')
  getHello(@Param('name') name: string) {
    return this.videoCallClient.getRoom(name);
  }
  @Get()
  getAllRoom() {
    return this.videoCallClient.getAllRoom();
  }

  @Post()
  createRoom(@Body() body: IRoomOptions) {
    return this.videoCallClient.createRoom(body);
  }

  @Delete(':name')
  deleteRoom(@Param('name') name) {
    return this.videoCallClient.deleteRoom(name);
  }
}
