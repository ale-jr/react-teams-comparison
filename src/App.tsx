import Router from "routes";
import ThemeProvider from "providers/ThemeProvider";
import GlobalStyles, { CssReset } from "globalStyles";
const App: React.FC = () => (
  <ThemeProvider>
    <GlobalStyles />
    <CssReset />
    <Router />
  </ThemeProvider>
);

export default App;
