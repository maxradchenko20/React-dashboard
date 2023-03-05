import { ReactNode } from 'react';

import { LoginResponseParams } from '@/api/models/login-response';
import { Nullable } from '@/utils/types';

export type Props = {
  children?: ReactNode;
};

export type AUTH_STATE = {
  user: Nullable<LoginResponseParams>;
  isAuthenticated: boolean;
};
