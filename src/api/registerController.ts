import { instance } from '../config/privateClient';
import { RegisterRequestParams } from './models/register-request';

export const registerBaseUrl = 'auth/register';

export const registerApi = (registerParams: RegisterRequestParams) => {
  return instance.post(registerBaseUrl, {
    ...registerParams
  });
};
