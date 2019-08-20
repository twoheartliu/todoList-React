import React, { useState } from "react";
// import TodoCell from "./TodoCell";
import { Button, Input, List } from "antd";
import "./style.css";

const TodoList = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState(["hello", "world"]);

  const inputOnchange = e => {
    setValue(e.target.value);
  };

  const commitBtnClick = () => {
    if (value) {
      const newList = [...list, value];
      setList(newList);
      setValue("");
    }
  };

  // const btnToDelete = index => {
  //   const newList = [...list];
  //   newList.splice(index, 1);
  //   setList(newList);
  // };

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
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    </div>
  );
};

export default TodoList;
