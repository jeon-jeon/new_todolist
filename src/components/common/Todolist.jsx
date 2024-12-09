import { useState } from "react";
import TodoItems from "./TodoItems";

const Todolist = () => {
  const [todolist, setTodolist] = useState([]);
  const [item, setItem] = useState("");

  const change = (e) => {
    setItem((prev) => e.target.value);
  };

  const enter = (e) => {
    if (e.key === "Enter") {
      setTodolist((prev) => [...prev, item]);
      setItem("");
    }
  };

  const remove = (i) => {
    setTodolist((prev) => {
      const newTodolist = [...prev];
      const filterdArr = newTodolist.filter((v, idx) => i != idx);
      return filterdArr;
    });
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(14, 14, 14, 0.7)",
        padding: "10px 20px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 style={{ color: "white" }}>TO DO LIST</h1>
      <div
        style={{
          minHeight: "100px",
          width: "300px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {todolist.map((v, i) => (
          <TodoItems key={i} items={v} remove={() => remove(i)} />
        ))}
      </div>
      <input
        onChange={change}
        onKeyDown={enter}
        value={item}
        type="text"
        placeholder="Write down your list"
        style={{
          padding: "10px",
          border: "1px solid white",
          width: "300px",
          background: "none",
          color: "white",
        }}
      />
    </div>
  );
};

export default Todolist;
