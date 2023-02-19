import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ROUTES } from '@/config/routes';
import { handleShowSuccessSessionAlert } from '@/utils/handleShowSuccessSessionAlert';
import { SessionTypeEnum } from '@/utils/types';
import { handleShowErrAlert } from '@/utils/handleShowErrAlert';

import { RegisterType } from './types';
import { useApi } from './useApi';
import { AxiosError } from 'axios';

const defaultValue = {
  firstName: '',
  username: '',
  email: '',
  password: '',
};

export const useRegisterForm = () => {
  const { registerMutate } = useApi();

  const navigate = useNavigate();
  const form = useForm<RegisterType>({ defaultValues: defaultValue });

  const redirectToMain = () => navigate(ROUTES.MAIN_PAGE);

  const onSubmit: SubmitHandler<RegisterType> = (value) => {
    console.log(value);
    registerMutate.mutate(value, {
      onSuccess: () => {
        handleShowSuccessSessionAlert(SessionTypeEnum.REGISTER);
        redirectToMain();
      },
      onError: (err: any) => {
        const { message, statusCode } = err.response.data;
        handleShowErrAlert(message, statusCode);
      },
    });
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
