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
import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>

      <div className="route_container">
        <Switch>
          <ProtectedRoute path="/projectListings" component={ProjectListings} />
          <ProtectedRoute
            path={`/singleProject/:id`}
            component={SingleProject}
          />

          <ProtectedRoute path="/logout" component={Logout} />
          <ProtectedRoute path="/addtask/:project_id" component={AddTask} />
          <ProtectedRoute path="/addproject" component={AddProject} />
          <ProtectedRoute path="/editProject/:id" component={EditProject} />
          <ProtectedRoute
            path="/editTask/:project_id/:task_id"
            component={EditTask}
          />
          {loading ? (
            <Loading loading={loading} />
          ) : (
            <Route path="/Signup" component={SignUpForm} />
          )}
          {loading ? (
            <Loading />
          ) : (
            <Route path="/Login" component={LoginForm} />
          )}
          {loading ? (
            <Loading loading={loading} />
          ) : (
            <Route path="/landingPage" component={LandingPage} />
          )}
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
