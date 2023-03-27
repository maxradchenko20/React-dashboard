import client from '@/config/privateClient';

import { LoginRequestParams } from './models/login-request';
import { LoginResponseParams } from './models/login-response';

export const loginBaseUrl = 'auth/login';

export const loginApi = (loginParams: LoginRequestParams) => {
  return client.post<LoginResponseParams>(loginBaseUrl, {
    ...loginParams,
  });
};
