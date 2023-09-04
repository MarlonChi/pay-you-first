import { ReactComponent as Loading } from "../../assets/loading.svg";

import * as S from "./styles";

const Button = ({ children, loading, disabled }) => {
  return (
    <S.Button disabled={disabled || loading}>
      {loading ? <Loading /> : children}
    </S.Button>
  );
};

export default Button;
