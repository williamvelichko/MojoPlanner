import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { editTask } from "../reducer/actions";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";
import { MainContainer, Form, Button } from "./formsCSS/EditTaskCSS";

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
      .get(
        `https://mojoplanner.herokuapp.com/api/projects/task/${params.task_id}`
      )
      .then((res) => {
        setTask(res.data[0]);
      });
  }, []);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const save = (e) => {
    e.preventDefault();
    dispatch(editTask(task));
    setTimeout(() => {
      push(`/singleproject/${params.project_id}`);
    }, 500);
  };

  const cancel = (e) => {
    e.preventDefault();
    push(`/singleproject/${params.project_id}`);
  };
  return (
    <MainContainer>
      <h2>Edit Task</h2>
      <Form>
        <div className="category1">
          <label>TaskName :</label>
          <input
            className="input"
            name="task_name"
            type="text"
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
            type="text"
            onChange={handleChange}
            value={task.task_information}
            rows="5"
            maxLength="300"
          ></textarea>
        </div>
        <Button>
          <button className="save" onClick={save}>
            <h4>
              Save <EditIcon />
            </h4>
          </button>
          <button className="cancel" onClick={cancel}>
            <h4>
              Cancel <CancelIcon />
            </h4>
          </button>
        </Button>
      </Form>
    </MainContainer>
  );
}

export default connect()(EditTask);
