import "./App.css";
// eslint-disable-next-line
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './components/Landingpage'
import Home from "./components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
  //switch es el que envuelve y va de ruta en ruta 