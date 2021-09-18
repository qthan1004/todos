import React from "react";
import Items from "../Items/Item";
import "./style.scss";

function ListTask(props) {
  const { items, onClickEdit, onClickDelete } = props;
  const eleItem = items.map((item, index) => {
    return (
      <Items
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
        key={index}
        item={item}
        index={index}
      />
    );
  });

  return (
    <div className="list-task col-12">
      <div className="list-task__inner">
        <div className="list-task__inner__heading m-0">
          <h3>List Task</h3>
        </div>
        <div className="list-task__inner__body">
          <table className="table table-striped m-0">
            <thead>
              <tr>
                <th className="col-sm-1" scope="col">
                  #
                </th>
                <th className="col-sm-9" scope="col">
                  Task
                </th>
                <th className="col-sm-1" scope="col">
                  Level
                </th>
                <th className="col-sm-1" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>{eleItem}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default ListTask;
