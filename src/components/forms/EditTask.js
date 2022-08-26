import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { connect } from "react-redux";

import { useParams } from "react-router-dom";
import { editTask } from "../reducer/actions";

function EditTask(props) {
  const { dispatch } = props;

  const { push } = useHistory();
  const params = useParams();

  const [task, setTask] = useState({
    task_name: "",
    task_information: "",
    task_id: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/projects/task/${params.task_id}`)
      .then((res) => {
        setTask(res.data[0]);
      });
  }, []);
  console.log(task);
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const save = (e) => {
    e.preventDefault();
    dispatch(editTask(task));
    push(`/singleproject/${params.project_id}`);
  };

  const cancel = (e) => {
    e.preventDefault();
    push(`/singleproject/${params.project_id}`);
  };
  return (
    <div>
      <div>
        <form>
          <h2>Edit Task</h2>
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
          <button onClick={save}>save!</button>
          <button onClick={cancel}>cancel</button>
        </form>
      </div>
    </div>
  );
}

export default connect()(EditTask);
