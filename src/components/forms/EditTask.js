import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { editTask } from "../reducer/actions";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";

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
  console.log(task);
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

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: fira sans;
    color: #ffffff;
    font-weight: 30;
    font-size: 1.8rem;
  }
  @media (max-width: 420px) {
    h2 {
      font-size: 1.6rem;
    }
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #bfc7d2;
  padding: 0px 20px 0px 20px;
  width: 90%;
  height: 50vh;
  margin: auto;
  box-shadow: 30px 30px 2px black, 15px 15px 1px 2px rgba(0, 0, 0, 0);
  .category1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20%;
    display: flex;
    flex-direction: column;

    label {
      font-family: fira sans;
      font-size: 1.2rem;
    }

    .input {
      padding: 10px;
      border-radius: 7px;
      border: 2px solid black;
      font-family: fira sans;
      :hover {
        border: 2px solid #257dae;
        box-shadow: 0px 0px 1px 1px #257dae;
        transition-duration: 0.2s;
      }
    }
  }
  .category2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 30%;
    display: flex;
    flex-direction: column;

    label {
      font-family: fira sans;
      font-size: 1.2rem;
    }
    textarea {
      margin-top: 20px;
    }
    .input {
      font-family: fira sans;
      padding: 10px;
      border-radius: 7px;
      border: 2px solid black;
      :hover {
        border: 2px solid #257dae;
        box-shadow: 0px 0px 1px 1px #257dae;
        transition-duration: 0.2s;
      }
    }
  }
  @media (max-width: 420px) {
    width: 75%;
    padding: 10px;
    .category {
      label {
        font-size: 1rem;
      }
    }
  }
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  //height: 7vh;
  button {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 20%;
    height: 7vh;
    background-color: #257dae;
    padding: 0;
    border-radius: 5px;
    border: 1px solid transparent;
    :hover {
      box-shadow: 0px 0px 3px 3px grey;
      transition-duration: 0.2s;
    }
    h4 {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      width: 60%;
      color: #ffffff;
      font-weight: 30;
      font-size: 1.2rem;
    }
  }
  .save {
    background-color: #0b343d;
  }
  .cancel {
    background-color: #e46363;
  }
  @media (max-width: 420px) {
    button {
      width: 40%;
      height: 6.5vh;
      h4 {
        font-size: 1rem;
      }
    }
  }
`;
