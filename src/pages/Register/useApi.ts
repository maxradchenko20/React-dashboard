import { useMutation } from 'react-query';
import { registerApi } from '../../api/registerController';

export const useApi = () => {
  const registerMutate = useMutation(registerApi);

  return {
    registerMutate,
  };
};
