const Slider = (props) => {
  return (
    <div
      style={{
        border: "1px solid white",
        width: "100px",
        padding: "10px 10px",
        position: "relative",
      }}
    >
      <span
        style={{
          position: "absolute",
          left: props.left,
          top: 0,
          transition: "all 0.3s",
        }}
      >
        😀
      </span>
    </div>
  );
};

export default Slider;
