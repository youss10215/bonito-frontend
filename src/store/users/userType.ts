import { Meeting } from '@/store/meetings/meetingType';

export type User = {
  email: string;
  id: number;
  username: string;
  meetings: Meeting[];
};

export interface UserState {
  users: User[]
};