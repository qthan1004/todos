import React, { useEffect, useRef, useState } from "react";
import "./App.scss";
import { v4 as uuidv4 } from "uuid";
import { filter, includes, orderBy, reject } from "lodash"; //import đúng phần cần dùng sẽ load nhanh hơn
import Title from "../src/components/Title/Title";
import Tools from "./components/Tools/Tools";
import Listtask from "./components/Listtask/Listtask";
import Tasks from "./components/Mock/Task";

function App() {
  const [items, setItems] = useState(Tasks);
  const [itemSelected, setItemSelected] = useState("");
  const [isShowForm, setIsShowForm] = useState(false);
  const [filterList, setFilterList] = useState({
    strSearch: "",
    sortBy: "name",
    sortDir: "asc",
  });
  const prevTodoList = useRef(items);

  useEffect(() => {
    let originTodoList = [...items];
    let currentTodoList = [];

    originTodoList = orderBy(
      originTodoList,
      [filterList.sortBy], //chỗ này cần phải đúng với key -> hàm mới chạy dc
      [filterList.sortDir]
    );

    if (filterList.strSearch === "") {
      currentTodoList = prevTodoList.current;
      setItems(currentTodoList);
    } else {
      currentTodoList = filter(originTodoList, (item) => {
        return includes(item.name, filterList.strSearch);
      });
      setItems(currentTodoList);
    }
  }, [filterList]);

  //HANDLE EDIT
  const handleEdit = (item) => {
    setItemSelected(item);
    setIsShowForm(true);
  };

  const handleClose = () => {
    setIsShowForm(!isShowForm);
  };

  const handleAddTask = (item) => {
    console.log("EditData: ", item);
    let newItemList = items;
    let id = null;
    let level = !item.level ? 1 : item.level;
    if (!item.id) {
      //ADD
      id = uuidv4();
    } else {
      //EDIT
      newItemList = reject(newItemList, { id: item.id });
      id = item.id;
    }

    newItemList.push({
      id: id,
      name: item.name,
      level: +level,
    });
    //Thêm rồi cần phải cập nhật cho state
    setItems(newItemList);
  };

  //HADLE DELETE
  const handleDelete = (id) => {
    let originItems = [...items];
    let newItemsList = [];
    newItemsList = originItems.filter((item) => item.id !== id);
    setItems(newItemsList);
  };

  //XỬ LÝ PROPS ĐƯỢC TRUYỀN VỀ TỪ SEARCH COMPONENT
  const handleSearch = (value) => {
    setFilterList({ ...filterList, strSearch: value });
  };

  //SORT
  const handleSort = (sortBy, sortDir) => {
    setFilterList({ ...filterList, sortBy: sortBy, sortDir: sortDir });
  };

  return (
    <div className="App row container-fluid p-0 m-0">
      <Title />
      {/* onClickSearchgo = props của tools */}
      <Tools
        // TRUYỀN PROPS TỪ APP VỀ TOOL -> SORT
        itemSelected={itemSelected}
        isShowForm={isShowForm}
        sortBy={filterList.sortBy}
        sortDir={filterList.sortDir}
        onClickSort={handleSort}
        onClickSearchGo={handleSearch}
        onClickSubmitTask={handleAddTask} //ADD thuộc Tools
        onCloseForm={handleClose}
      />
      {/* TRUYỀN ITEMS VÀO COMPONENTS LISTTASK DO ITEMS THUỘC APP */}
      <Listtask
        onClickEdit={handleEdit}
        onClickDelete={handleDelete}
        items={items}
      />
    </div>
  );
}

export default App;
