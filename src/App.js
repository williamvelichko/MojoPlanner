import "./App.css";
import Header from "./components/Header";
import ProjectListings from "./components/HomePage/ProjectListings";
import { Route, Switch } from "react-router-dom";
import SignUpForm from "./components/forms/SignUpForm";
import LoginForm from "./components/forms/LoginForm";
import LandingPage from "./components/landingPage/LandingPage";
import SingleProject from "./components/HomePage/SingleProject";
import AddProject from "./components/forms/AddProject";
import AddTask from "./components/forms/AddTask";
import EditProject from "./components/forms/EditProject";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="route_container">
        <Switch>
          <Route exact path="/landingpage" component={LandingPage} />
          <Route exact path="/" component={LandingPage} />
          <Route path="/projectListings" component={ProjectListings} />
          <Route path={`/singleProject/:id`} component={SingleProject} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/addtask" component={AddTask} />
          <Route path="/addproject" component={AddProject} />
          <Route path="/editProject" component={EditProject} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
