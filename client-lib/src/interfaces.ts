export interface INewRoomResponse {
  id: string;
  name: string;
  api_created: boolean;
  privacy: string;
  url: string;
  created_at: string;
  config?: {
    enable_knocking?: boolean;
    nbf?: number;
    exp?: number;
    max_participants?: number;
    autojoin?: boolean;
    enable_screenshare?: boolean;
    enable_chat?: boolean;
    start_video_off?: boolean;
    start_audio_off?: boolean;
    owner_only_broadcast?: boolean;
    enable_recording?: string;
    eject_at_room_exp?: boolean;
    eject_after_elapsed?: number;
    lang?: string;
  };
}

export interface IAllRoomResponse {
  total_count: number;
  data: INewRoomResponse[];
}

export interface IDeleteRoomResponse {
  deleted: boolean;
  name: string;
}

export interface IDailyError {
  error: string;
  info: string;
}

export interface IRoomOptions {
  name: string;
  privacy?: string;
  properties?: {
    enable_knocking?: boolean;
    nbf?: number;
    exp?: number;
    max_participants?: number;
    autojoin?: boolean;
    enable_screenshare?: boolean;
    enable_chat?: boolean;
    start_video_off?: boolean;
    start_audio_off?: boolean;
    owner_only_broadcast?: boolean;
    enable_recording?: string;
    eject_at_room_exp?: boolean;
    eject_after_elapsed?: number;
    lang?: string;
  };
}
