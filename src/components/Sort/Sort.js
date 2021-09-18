import React from "react";
import "./style.scss";

function Sort(props) {
  const { sortBy, sortDir, onClickSort } = props;
  let strSort = sortBy + " - " + sortDir;

  const handleSort = (sortBy, sortDir) => {
    onClickSort(sortBy, sortDir);
  };

  return (
    <div className="col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center sort">
      <div className="col-5 sort__sort-button">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sort by
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                onClick={() => handleSort("name", "asc")}
                className="dropdown-item"
                role="button"
              >
                Name ACS
              </a>
            </li>
            <li>
              <a
                onClick={() => handleSort("name", "desc")}
                className="dropdown-item"
                role="button"
              >
                Name DECS
              </a>
            </li>

            <div className="dropdown-divider" role="banner" />
            <li>
              <a
                onClick={() => handleSort("level", "asc")}
                className="dropdown-item"
                role="button"
              >
                Level ACS
              </a>
            </li>
            <li>
              <a
                onClick={() => handleSort("level", "desc")}
                className="dropdown-item"
                role="button"
              >
                Level DESC
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-6 sort__current-sort">
        <span>
          <strong>{strSort}</strong>
        </span>
      </div>
    </div>
  );
}
export default Sort;
