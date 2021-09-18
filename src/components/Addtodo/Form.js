import React, { useEffect, useState } from "react";
import "./style.scss";

function Form(props) {
  const [todoForm, setTodoForm] = useState({
    id: "",
    name: "",
    level: "",
  });
  const { onClickSubmitTask, onClickCancel, itemSelected } = props;

  useEffect(() => {
    setTodoForm({
      id: itemSelected.id,
      name: itemSelected.name,
      level: itemSelected.level,
    });
  }, [itemSelected]);

  //ADD_TASK
  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setTodoForm({
      ...todoForm,
      [name]: value, // set lại state với các thông tin trên
    });
  };

  const handelCancle = () => {
    onClickCancel();
  };

  const handleSubmit = (event) => {
    let task = {
      id: todoForm.id,
      name: todoForm.name,
      level: todoForm.level,
    };

    console.log(task);
    onClickSubmitTask(task);
    onClickCancel();

    //clear input task
    setTodoForm({
      id: "",
      name: "",
      level: "",
    });
    //close form

    event.preventDefault(); //chống bị load lại page
  };

  return (
    <div className=" add__body">
      <form className="input-group" onSubmit={handleSubmit}>
        <input
          value={todoForm.name || ""}
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Type your task...."
          className="form-control"
          aria-label="Text input with segmented dropdown button"
          required
        />
        <div className="input-group-append">
          <div className="input-group">
            <select
              value={todoForm.level}
              onChange={handleChange}
              name="level"
              className="custom-select"
              required
            >
              <option value={1}>Small</option>
              <option value={2}>Medium</option>
              <option value={3}>Hard</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            onClick={handelCancle}
            className="btn btn-outline-secondary"
            type="button"
          >
            Cancle
          </button>
        </div>
      </form>
    </div>
  );
}
export default Form;
