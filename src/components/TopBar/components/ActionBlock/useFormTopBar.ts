import { SubmitHandler, useForm } from 'react-hook-form';

const defaultValue = {
  search: '',
};

type TopBarFormType = {
  search: string;
};

export const useFormTopBar = () => {
  const form = useForm<TopBarFormType>({ defaultValues: defaultValue });

  const onSubmit: SubmitHandler<TopBarFormType> = ({ search }) => {
    console.log(search);
  };

  return {
    form,
    handleSubmit: form.handleSubmit(onSubmit),
  };
};
