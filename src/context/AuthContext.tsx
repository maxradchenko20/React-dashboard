import { createContext, useContext } from 'react';

import { LoginResponseParams } from '@/api/models/login-response';
import { noop } from '@/utils/constans';
import { Nullable } from '@/utils/types';

export type AuthContext = {
  isAuthenticated: boolean;
  logOut: () => void;
  user: Nullable<LoginResponseParams>;
  handleAuthentication: (user: Nullable<LoginResponseParams>) => void;
};

const authContext = createContext<AuthContext>({
  user: null,
  isAuthenticated: false,
  handleAuthentication: noop,
  logOut: noop,
});

export const useAuthContext = () => useContext(authContext);
export const AuthProvider = authContext.Provider;

export default authContext;
