import React from "react";

const incompleteStyle = {
  backgroundColor: "#fff38e",
  boxShadow: "0px 0px 0px 10px #fff38e",
  border: "dashed 2px #ffb03f",
  borderRadius: "9px",
  margin: "30px",
  padding: "0.5em 0.5em 0.5em 2em",
  width: "400px"
};

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div style={incompleteStyle}>
      <p className="title">未完了のTODO</p>
      <ul id="incomplete-list">
        {todos.map((todo, index) => {
          return (
            <li key={todo} class="list-row">
              <p>{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
