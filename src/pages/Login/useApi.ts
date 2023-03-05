import { useMutation } from 'react-query';

import { loginApi } from '@/api/loginController';

export const useApi = () => {
  const loginMutation = useMutation(loginApi);

  return {
    loginMutation,
  };
};
