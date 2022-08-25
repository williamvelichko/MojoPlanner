import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../reducer/actions";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";

function AddTask(props) {
  const [error, setError] = useState("");
  const { dispatch } = props;
  const params = useParams();

  const { push } = useHistory();

  const [task, setTask] = useState({
    task_name: "",
    task_information: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (task.task_name === "" || task.task_information === "") {
      setError("ALL FIELDS REQUIRED!");
    } else {
      dispatch(addTask(task, params.project_id));
      push(`/singleProject/${params.project_id}`);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={submit}>
          <h2>Add Task</h2>
          <label>TaskName :</label>
          <input
            name="task_name"
            type="text"
            onChange={handleChange}
            value={task.task_name}
          />
          <label>Info :</label>
          <input
            name="task_information"
            type="text"
            onChange={handleChange}
            value={task.task_information}
          />
          <button>Add Task!</button>
          <p>{error}</p>
        </form>
      </div>
    </div>
  );
}

export default connect()(AddTask);
