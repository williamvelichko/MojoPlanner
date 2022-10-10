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
import EditTask from "./components/forms/EditTask";
import ProtectedRoute from "./components/ProtectedRoute";
import Logout from "./components/forms/Logout";

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
          <ProtectedRoute path="/projectListings" component={ProjectListings} />
          <ProtectedRoute
            path={`/singleProject/:id`}
            component={SingleProject}
          />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/login" component={LoginForm} />
          <ProtectedRoute path="/logout" component={Logout} />
          <ProtectedRoute path="/addtask/:project_id" component={AddTask} />
          <ProtectedRoute path="/addproject" component={AddProject} />
          <ProtectedRoute path="/editProject/:id" component={EditProject} />
          <ProtectedRoute
            path="/editTask/:project_id/:task_id"
            component={EditTask}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
