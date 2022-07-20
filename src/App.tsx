import Router from "routes"

//Although this component only returns a single component, in the future it may have some global context providers, or styles, that'ts why we have this App component instead just calling the router component inside index.tsx
const App: React.FC = () => <Router />

export default App;
