import Error from "../Error";
import * as S from "./styles";

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  disabled,
  error,
  ...props
}) => {
  return (
    <S.Box {...props}>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        isInvalid={!!error}
      />
      {error && <Error error={error} />}
    </S.Box>
  );
};

export default InputField;
