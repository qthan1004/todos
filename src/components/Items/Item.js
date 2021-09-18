import React from "react";
import "./style.scss";

function Items(props) {
  const { item, index, onClickEdit, onClickDelete } = props;

  const handleEdit = (item) => {
    onClickEdit(item);
  };

  //HANDLE DELETE BTN
  const handleDelete = (id) => {
    onClickDelete(id);
  };
  const handelEleLevel = (level) => {
    let eleLever;
    if (level === 2) {
      eleLever = <span className="bg-info level">Medium</span>;
    } else if (level === 3) {
      eleLever = <span className="bg-danger level">Hard</span>;
    } else if (level === 1) {
      eleLever = <span className="bg-success level">Small</span>;
    }
    return eleLever;
  };

  return (
    <tr>
      <td className="align-middle" scope="row">
        {/* DO INDEX BẮT ĐẦU TỪ 0 NHƯNG STT BẮT ĐẦU TỪ 1 NÊN CẦN +1 */}
        {index + 1}
      </td>

      <td className="align-middle">{item.name}</td>
      <td className="align-middle">{handelEleLevel(item.level)}</td>
      <td>
        <div
          className="d-flex justify-content-around"
          role="group"
          aria-label="Basic example"
        >
          <button
            onClick={() => handleEdit(item)}
            type="button"
            className="btn btn-warning"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(item.id)}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
export default Items;
