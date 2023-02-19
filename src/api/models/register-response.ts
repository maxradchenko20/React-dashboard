import { ProfileResponseParams } from './profile-response';

export type LoginResponseParams = {
  user: ProfileResponseParams;
  token: string;
};
