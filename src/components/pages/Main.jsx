import Side from "../layout/Side";
import Time from "../layout/Time";

const Main = () => {
  return (
    <main
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Side />
      <Time />
    </main>
  );
};

export default Main;
