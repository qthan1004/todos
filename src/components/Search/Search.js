import React, { useState } from "react";
import "./style.scss";

function Search(props) {
  const [strSearch, setStrSearch] = useState("");
  const { onClickGo } = props;

  const handleChangeValue = (event) => {
    setStrSearch(event.target.value);
  };

  //HANDLE EVENT CLICK GO-BTN
  const handleSearch = () => {
    onClickGo(strSearch);
  };

  //HANDLE CLEAR BUTTON
  const handleClearInput = () => {
    setStrSearch("");
    onClickGo("");
  };

  return (
    <div className="col-lg-4 col-md-4 col-md-12 p-0 input-group mb-3 search">
      <input
        type="text"
        className="form-control"
        placeholder="Search for..."
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={strSearch}
        onChange={handleChangeValue}
      />
      <div className="input-group-append search__btn">
        <button
          onClick={handleClearInput}
          className="btn btn-light"
          type="button"
        >
          Clear!
        </button>
        <button onClick={handleSearch} className="btn btn-info" type="button">
          Go!
        </button>
      </div>
    </div>
  );
}
export default Search;
