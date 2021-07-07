import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from './components/Projects';
import Home from './components/Home';
import { Redirect, Route, HashRouter as Router , Switch } from "react-router-dom";

function App() {
  const redirect = () => <Redirect to="/" />;

  return (
    <div className="App">
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossOrigin="anonymous"/>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Navbar />
        <Switch>
          <Route component={Projects} path="/projects" />
          <Route component={Home} path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
