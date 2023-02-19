import Swal from 'sweetalert2';

export const handleShowErrAlert = (title: string, errCode: string) => {
  Swal.fire({
    icon: 'error',
    title: `Status code: ${errCode}`,
    text: title,
  });
};
