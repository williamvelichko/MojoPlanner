import React, { useState } from "react";
import { connect } from "react-redux";

function AddProject() {
  const [project, setProject] = useState({
    projectName: "",
    projectLeader: "",
  });

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <form onSubmit={submit}>
          <h2>Add Project</h2>
          <label>ProjectName :</label>
          <input name="projectName" type="text" />
          <label>ProjectLeader :</label>
          <input name="projectLeader" type="text" />
          <button>Add Project!</button>
        </form>
      </div>
    </div>
  );
}

export default AddProject;
