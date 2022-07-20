import Router from "routes"
import ThemeProvider from 'providers/ThemeProvider'

const App: React.FC = () => <ThemeProvider><Router /></ThemeProvider>

export default App;
