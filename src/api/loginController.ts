import { instance } from '../config/privateClient';
import { LoginRequestParams } from './models/login-request';
import { LoginResponseParams } from './models/login-response';

export const loginBaseUrl = 'auth/login';

export const loginApi = (loginParams: LoginRequestParams) => {
  return instance.post<LoginResponseParams>(loginBaseUrl, {
    ...loginParams
  });
};
