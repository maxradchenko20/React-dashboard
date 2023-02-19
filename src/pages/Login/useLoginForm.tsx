import { useApi } from './useApi';
import { useNavigate } from 'react-router-dom';
import { LoginType } from '@/pages/Login/types';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ROUTES } from '@/config/routes';
import { handleShowSuccessSessionAlert } from '@/utils/handleShowSuccessSessionAlert';
import { SessionTypeEnum } from '@/utils/types';
import { handleShowErrAlert } from '@/utils/handleShowErrAlert';

const defaultValue = {
  email: '',
  password: '',
};

export const useLoginForm = () => {
  const { loginMutation } = useApi();
  const navigate = useNavigate();
  const form = useForm<LoginType>({ defaultValues: defaultValue });

  const redirectToMain = () => navigate(ROUTES.MAIN_PAGE);

  const onSubmit: SubmitHandler<LoginType> = (data) => {
    loginMutation.mutate(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
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
