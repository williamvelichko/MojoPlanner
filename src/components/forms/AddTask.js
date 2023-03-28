import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../reducer/actions";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { MainContainer, Form, Button } from "./formsCSS/AddTaskCSS";

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

      setTimeout(() => {
        push(`/singleProject/${params.project_id}`);
      }, 500);
    }
  };

  return (
    <MainContainer>
      <h2>Create Task</h2>
      <Form onSubmit={submit}>
        <div className="category1">
          <label>Task :</label>
          <input
            className="input"
            name="task_name"
            type="text"
            placeholder="Title"
            onChange={handleChange}
            value={task.task_name}
            maxLength="100"
          />
        </div>

        <div className="category2">
          <label>Info :</label>

          <textarea
            className="input"
            name="task_information"
            onChange={handleChange}
            value={task.task_information}
            rows="5"
            placeholder="Text...."
            maxLength="300"
          ></textarea>
        </div>
        <Button>
          <button>
            <h4>
              Add Task <AddCircleOutlineIcon />
            </h4>
          </button>
          <p>{error}</p>
        </Button>
      </Form>
    </MainContainer>
  );
}

export default connect()(AddTask);
