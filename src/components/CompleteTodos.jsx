import React from "react";

const completeStyle = {
  backgroundColor: "#ffc4e1",
  boxShadow: "0px 0px 0px 10px #ffc4e1",
  border: "dashed 2px #ff77bb",
  borderRadius: "9px",
  margin: "30px",
  padding: "0.5em 0.5em 0.5em 2em",
  width: "400px"
};

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div style={completeStyle}>
      <p className="title">完了したTODO</p>
      <ul id="complete-list">
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <p>{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
