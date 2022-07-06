import "./App.css";
import Header from "./components/Header";
import ProjectListings from "./components/HomePage/ProjectListings";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="route_container">
        <Switch>
          <Route path="/projectListings" component={ProjectListings} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
