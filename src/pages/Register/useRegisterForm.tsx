import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/config/routes';
import { handleShowErrAlert } from '@/utils/handleShowErrAlert';
import { handleShowSuccessSessionAlert } from '@/utils/handleShowSuccessSessionAlert';
import { SessionTypeEnum } from '@/utils/types';

import { RegisterType } from './types';
import { useApi } from './useApi';

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
