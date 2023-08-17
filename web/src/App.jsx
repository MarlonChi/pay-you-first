import { ThemeProvider } from "styled-components";
import Signup from "./pages/Signup";
import theme from "./styles/Theme/theme";
import { GlobalStyle } from "./styles/Theme/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Signup />
    </ThemeProvider>
  );
}

export default App;
