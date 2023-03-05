import { TextField, TextFieldProps } from '@mui/material';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

type Props<T extends FieldValues> = Omit<TextFieldProps, 'name'> & {
  control: Control<T, object>;
  disableErrorSpace?: boolean;
  name: Path<T>;
  maxLength?: number;
};

const TextFieldController = <T extends FieldValues>({
  control,
  disableErrorSpace,
  name,
  required,
  label,
  maxLength = 50,
  sx,
  ...restProps
}: Props<T>) => {
  return (
    <Controller
      render={({ field: { ref, ...restField }, fieldState: { error } }) => (
        <TextField
          {...restField}
          {...restProps}
          inputRef={ref}
          error={!!error}
          label={label}
          // helperText={error?.message || (disableErrorSpace ? '' : ' ')}
          inputProps={{
            maxLength,
          }}
          fullWidth
          sx={{
            width: '250px',
            borderRadius: '8px',
            color: 'red',
            ...sx,
          }}
        />
      )}
      name={name}
      control={control}
      rules={{
        required: required ? 'Required' : '',
      }}
    />
  );
};

export default TextFieldController;
