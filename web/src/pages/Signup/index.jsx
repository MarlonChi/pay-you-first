import { useState } from "react";
import { Button, InputField } from "../../components";

import * as S from "./styles";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:9901/users", {
        name,
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // axios
  //   .get("http://localhost:9901/users")
  //   .then((response) => console.log(response.data));

  return (
    <S.Main>
      <S.Form onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="name"
          label="Nome"
          disabled={loading}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <InputField
          type="email"
          name="email"
          label="E-mail"
          disabled={loading}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <InputField
          type="password"
          name="password"
          label="Senha"
          disabled={loading}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <S.Button>
          <Button loading={loading}>Cadastrar</Button>
        </S.Button>
        {error && <p>{error}</p>}
      </S.Form>
    </S.Main>
  );
};

export default Signup;
