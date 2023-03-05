import React from 'react';

export type Nullable<T> = T | null;

export type LayoutType = {
  children: React.ReactNode;
};

export enum SessionTypeEnum {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
}

export enum RolesEnum {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum ThemeTypeEnum {
  DARK = 'dark',
  LIGHT = 'light',
}
