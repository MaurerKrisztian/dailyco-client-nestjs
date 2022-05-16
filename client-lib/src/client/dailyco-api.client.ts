import {Inject, Injectable, Logger} from '@nestjs/common';
import {
  IAllRoomResponse,
  IDeleteRoomResponse,
  INewRoomResponse,
  IRoomOptions,
} from './interfaces';
import axios, { AxiosInstance } from 'axios';
import {IDailycoModuleOptions} from "./dailyco-api.module";

@Injectable()
export class DailycoApiClient {
  private readonly logger = new Logger(DailycoApiClient.name);

  private readonly ENDPOINTS = {
    ROOMS: '/rooms',
    TOKENS: '/meeting-tokens',
  };

  client: AxiosInstance;
  constructor(@Inject('API_OPTIONS')private readonly options: IDailycoModuleOptions) {
    this.client = axios.create({
      baseURL: this.options.apiurl,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.options.apikey}`,
      },
    });
    this.client.interceptors.response.use((res) => {
      return res.data;
    });
    this.logger.debug(`DAILYCO client is ready`);
  }

  async createRoom(roomOptions: IRoomOptions): Promise<INewRoomResponse> {
    this.logger.debug(`create room: `, roomOptions);
    return this.client.post(this.options.apiurl + this.ENDPOINTS.ROOMS);
  }

  deleteRoom(roomName: string): Promise<IDeleteRoomResponse> {
    this.logger.debug('delete room: ', roomName);
    return this.client.delete(
      `${this.options.apiurl  + this.ENDPOINTS.ROOMS}/${roomName}`,
    );
  }

  getRoom(roomName: string): Promise<IAllRoomResponse> {
    this.logger.debug('get room: ', roomName);
    return this.client.get(`${this.options.apiurl }/rooms/${roomName}`);
  }

  getAllRoom(): Promise<IAllRoomResponse> {
    this.logger.debug('get all room');
    return this.client.get(this.options.apiurl  + this.ENDPOINTS.ROOMS);
  }

  async deleteAllRoom(): Promise<any> {
    this.logger.debug('delete all room');
    const rooms = await this.getAllRoom();
    rooms.data.forEach((room: any) => {
      this.deleteRoom(room.name);
    });
  }
}
