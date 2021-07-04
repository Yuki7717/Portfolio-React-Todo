import React from "react";

const inputAreaStyle = {
  backgroundColor: "#aabbee",
  boxShadow: "0px 0px 0px 10px #aabbee",
  borderRadius: "9px",
  margin: "30px",
  padding: "0.5em 0.5em 0.5em 2em",
  width: "400px"
};

const inputStyle = {
  outline: "none"
};

export const InputTodo = (props) => {
  const { onChange, todoText, onClick, disabled } = props;
  return (
    <div style={inputAreaStyle}>
      <input
        style={inputStyle}
        onChange={onChange}
        id="add-text"
        placeholder="TODOを入力"
        value={todoText}
        disabled={disabled}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
