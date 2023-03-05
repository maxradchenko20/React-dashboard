import { FC, useState } from 'react';

import { LoginResponseParams } from '@/api/models/login-response';
import { AuthProvider } from '@/context/AuthContext';
import { Nullable } from '@/utils/types';

import { AUTH_STATE, Props } from './type';

export const GUEST_STATE = {
  user: null,
  isAuthenticated: false,
};

const Auth: FC<Props> = ({ children }) => {
  const [state, setState] = useState<AUTH_STATE>(GUEST_STATE);

  const handleAuthentication = (user: Nullable<LoginResponseParams>) => {
    setState({
      ...state,
      user,
      isAuthenticated: true,
    });
  };

  const logOut = () => {
    console.log('logOut');
  };

  const authProviderValue = {
    ...state,
    handleAuthentication,

    logOut,
  };

  return <AuthProvider value={authProviderValue}>{children}</AuthProvider>;
};

export default Auth;
