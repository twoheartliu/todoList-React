import React from "react";
import { List } from "antd";

const TodoCell = props => {
  const { index, item, btnToDelete, data } = props;

  // console.log("data", data);
  const cellClick = () => {
    btnToDelete(index);
  };
  return (
    <List
      onClick={cellClick}
      bordered
      size="large"
      // dataSource={data}
    >
      {item}
    </List>
  );
};

export default TodoCell;
