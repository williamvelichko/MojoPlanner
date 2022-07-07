import "./App.css";
import Header from "./components/Header";
import ProjectListings from "./components/HomePage/ProjectListings";
import { Route, Switch } from "react-router-dom";
import SignUpForm from "./components/forms/SignUpForm";
import LoginForm from "./components/forms/LoginForm";
import LandingPage from "./components/landingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="route_container">
        <Switch>
          <Route path="/projectListings" component={ProjectListings} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/login" component={LoginForm} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
