import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";

import { Button, InputField } from "../../components";

import * as S from "./styles";

const schema = yup.object().shape({
  name: yup.string().required("Informe o seu nome"),
  email: yup.string().required("Informe o seu e-mail").email("E-mail inválido"),
  password: yup.string().required("Digite uma senha"),
});

const Signup = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:9901/users", values);
    } catch (error) {
      console.log(error);
    }
  };

  const { values, errors, touched, handleChange, handleBlur, isSubmitting } =
    useFormik({
      handleSubmit,
      validationSchema: schema,
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
    });

  axios
    .get("http://localhost:9901/users")
    .then((response) => console.log(response.data));

  return (
    <S.Main>
      <S.Form onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="name"
          label="Nome"
          disabled={isSubmitting}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && errors.name}
        />
        <InputField
          type="email"
          name="email"
          label="E-mail"
          disabled={isSubmitting}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
        />
        <InputField
          type="password"
          name="password"
          label="Senha"
          disabled={isSubmitting}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && errors.password}
        />
        <S.Button>
          <Button loading={isSubmitting}>Cadastrar</Button>
        </S.Button>
      </S.Form>
    </S.Main>
  );
};

export default Signup;
