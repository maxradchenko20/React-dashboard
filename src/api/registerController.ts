import client from '@/config/privateClient';

import { RegisterRequestParams } from './models/register-request';

export const registerBaseUrl = 'auth/register';

export const registerApi = (registerParams: RegisterRequestParams) => {
  return client.post(registerBaseUrl, {
    ...registerParams,
  });
};
