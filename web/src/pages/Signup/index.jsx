import { Button, InputField } from "../../components";

import * as S from "./styles";

const Signup = () => {
  return (
    <S.Main>
      <S.Form>
        <InputField type="text" name="name" label="Nome" />
        <InputField type="email" name="email" label="E-mail" />
        <InputField type="password" name="password" label="Senha" />
        <S.Button>
          <Button>Cadastrar</Button>
        </S.Button>
      </S.Form>
    </S.Main>
  );
};

export default Signup;
