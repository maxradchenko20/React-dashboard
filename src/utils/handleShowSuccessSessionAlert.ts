import Swal from 'sweetalert2';
import { SessionTypeEnum } from './types';

export const handleShowSuccessSessionAlert = (sessionType: SessionTypeEnum) => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: sessionType.includes(SessionTypeEnum.LOGIN)
      ? 'You are logged in'
      : 'You are registered',
    showConfirmButton: false,
    timer: 1500,
  });
};
