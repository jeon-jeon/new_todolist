import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Login from "../common/Login";
import { useState } from "react";
import Photo from "../common/Photo";
import Water from "../common/Water";
import Todolist from "../common/Todolist";

const Side = () => {
  const [value, onChange] = useState(new Date());

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        flex: 1,
        height: "98%",
        backgroundColor: "rgba(109, 109, 109, 0.3)",
        padding: "20px",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <Login />
        <Photo />
      </div>
      <Water />
      <Calendar onChange={onChange} value={value} />
      <Todolist />
    </section>
  );
};

export default Side;
