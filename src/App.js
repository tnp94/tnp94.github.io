import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from './components/Projects';
import { Route, BrowserRouter as Router , Switch } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossOrigin="anonymous"/>
      <Router>
        <Header />
        <Navbar />
        <Switch>
          <Route component={Projects} exact={true} path="/" />
          <Route component={Projects} exact={true} path="/projects" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
