import { ThemeProvider as StyledThemeProvider } from "styled-components";
import themes from "themes";

interface ThemeProviderProps {
  children: JSX.Element | JSX.Element[];
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => (
  <StyledThemeProvider theme={themes.default}>{children}</StyledThemeProvider>
);

export default ThemeProvider;
