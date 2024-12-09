import { useEffect, useState } from "react";

const Time = () => {
  //   const date = new Date().toDateString();
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime((prev) => new Date().toLocaleTimeString());
    }, 1000);
  }, [time]);

  return (
    <section
      style={{
        flex: 4,
        height: "100%",
      }}
    >
      <h1
        style={{
          padding: "100px 200px",
          fontSize: "100px",
          color: "white",
        }}
      >
        {time}
      </h1>
    </section>
  );
};

export default Time;
