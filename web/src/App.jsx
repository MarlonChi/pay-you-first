import { styled } from "styled-components";

const Button = styled.a`
  background: ${(props) => props.theme.colors.green};
`;

function App() {
  return <Button>Hello world</Button>;
}

export default App;
