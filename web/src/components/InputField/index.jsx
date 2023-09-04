import * as S from "./styles";

const InputField = ({ label, type, name, ...props }) => {
  return (
    <S.Box {...props}>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input type={type} name={name} id={name} />
    </S.Box>
  );
};

export default InputField;
