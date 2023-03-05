import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/config/routes';
import { useAuthContext } from '@/context/AuthContext';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { LoginType } from '@/pages/Login/types';
import { handleShowErrAlert } from '@/utils/handleShowErrAlert';
import { handleShowSuccessSessionAlert } from '@/utils/handleShowSuccessSessionAlert';
import { SessionTypeEnum } from '@/utils/types';

import { useApi } from './useApi';

const defaultValue = {
  email: '',
  password: '',
};

export const useLoginForm = () => {
  const { loginMutation } = useApi();
  const navigate = useNavigate();
  const { handleAuthentication } = useAuthContext();
  const { setStorageItem } = useLocalStorage();

  const form = useForm<LoginType>({ defaultValues: defaultValue });

  const redirectToMain = () => navigate(ROUTES.MAIN_PAGE);

  const onSubmit: SubmitHandler<LoginType> = (data) => {
    loginMutation.mutate(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: (data) => {
          handleAuthentication(data.data);
          setStorageItem('isAuthenticated', true);
          handleShowSuccessSessionAlert(SessionTypeEnum.LOGIN);
          redirectToMain();
        },
        onError: (err: any) => {
          const { message, statusCode } = err.response.data;
          handleShowErrAlert(message, statusCode);
        },
      },
    );
  };

  const handleClear = () => {
    form.reset(defaultValue);
  };

  return {
    form,
    handleSubmit: form.handleSubmit(onSubmit),
    handleClear,
  };
};
