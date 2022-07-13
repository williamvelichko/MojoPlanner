import React, { useState } from "react";

function AddTask() {
  const [task, setTask] = useState({
    taskName: "",
    info: "",
  });
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <form onSubmit={submit}>
          <h2>Add Task</h2>
          <label>TaskName :</label>
          <input name="taskName" type="text" />
          <label>Info :</label>
          <input name="info" type="text" />
          <button>Add Task!</button>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
