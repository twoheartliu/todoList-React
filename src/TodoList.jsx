import React, { useState, useEffect } from "react";
// import TodoCell from "./TodoCell";
import { Button, Input, List, Icon } from "antd";
import "./style.css";

const TodoList = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    const storeList = localStorage.getItem("todoList");
    if (storeList) {
      setList(JSON.parse(storeList));
    }
  }, []);

  const inputOnchange = e => {
    setValue(e.target.value);
  };

  const commitBtnClick = () => {
    if (value) {
      const newList = [...list, value];
      setList(newList);
      setValue("");
      localStorage.setItem("todoList", JSON.stringify([...newList]));
    }
  };

  // const btnToDelete = index => {
  //   const newList = [...list];
  //   newList.splice(index, 1);
  //   setList(newList);
  // };
  const deleteBtnClick = index => {
    // console.log("index", index);
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
    localStorage.setItem("todoList", JSON.stringify([...newList]));
  };

  return (
    <div className="todo">
      <h1>Todo List</h1>
      <div className="inputs">
        <Input onChange={inputOnchange} value={value} className="input" />
        <Button type="primary" onClick={commitBtnClick} className="button">
          Button
        </Button>
      </div>
      <div className="list">
        <List
          size="large"
          // header={<div>Header</div>}
          // footer={<div>Footer</div>}
          bordered
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item className="list-item">
              {item}
              <Icon type="delete" onClick={() => deleteBtnClick(index)} />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default TodoList;
