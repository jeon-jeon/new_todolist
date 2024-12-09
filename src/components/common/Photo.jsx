const Photo = () => {
  const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const imgs = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
  ];
  return (
    <div style={{ position: "relative" }}>
      <img
        style={{
          borderRadius: "12px",
          width: "150px",
          height: "150px",
          objectFit: "cover",
        }}
        src={imgs[rand(0, imgs.length - 1)]}
        alt=""
      />
      <h3
        style={{
          position: "absolute",
          top: "70px",
          left: "15px",
          color: "white",
          textAlign: "center",
        }}
      >
        HOW ABOUT
        <br /> THIS PHOTO?
      </h3>
    </div>
  );
};

export default Photo;
