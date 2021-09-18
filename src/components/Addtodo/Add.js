import React from "react";
import Form from "./Form";
import "./style.scss";

function Add(props) {
  const { isShowForm, onCloseForm, itemSelected, onClickSubmitTask } = props;
  return (
    <div className="col-lg-5 col-md-5 col-sm-12 p-0 add">
      {isShowForm ? (
        <button
          onClick={onCloseForm}
          type="button"
          className="btn btn-success add__btn"
        >
          Close input Task
        </button>
      ) : (
        <button
          onClick={onCloseForm}
          type="button"
          className="btn btn-primary add__btn"
        >
          Add input Task
        </button>
      )}

      {isShowForm ? (
        <Form
          itemSelected={itemSelected}
          onClickSubmitTask={onClickSubmitTask}
          onClickCancel={onCloseForm}
        />
      ) : null}
    </div>
  );
}
export default Add;
