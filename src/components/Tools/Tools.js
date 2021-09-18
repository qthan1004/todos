import React from "react";
import "./style.scss";
import Search from "../Search/Search";
import SortButton from "../Sort/Sort";
import Add from "../Addtodo/Add";

function Tools(props) {
  const {
    sortBy,
    sortDir,
    itemSelected,
    onClickSearchGo,
    onClickSort,
    isShowForm,
    onClickSubmitTask,
    onCloseForm,
  } = props;

  return (
    <div className="d-flex col-12 tools ">
      <Search onClickGo={onClickSearchGo} />
      <SortButton onClickSort={onClickSort} sortBy={sortBy} sortDir={sortDir} />
      <Add
        isShowForm={isShowForm}
        itemSelected={itemSelected}
        onClickSubmitTask={onClickSubmitTask}
        onCloseForm={onCloseForm}
      />
    </div>
  );
}
export default Tools;
