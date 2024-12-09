import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const login = (e) => {
    if (e.key === "Enter") {
      setUser(e.target.value);
    }
  };

  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: "white",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        onKeyDown={login}
        type="text"
        placeholder="Your Name"
        style={{
          padding: "10px",
          textAlign: "center",
          display: user == "" ? "block" : "none",
        }}
        size={9}
      />
      <h3
        style={{
          textAlign: "center",
          display: user == "" ? "none" : "block",
        }}
      >
        {user}'s <br /> Daily Board
      </h3>
    </div>
  );
};

export default Login;
