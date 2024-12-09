import { useState } from "react";
import WaterButton from "./WaterButton";
import Slider from "./Slider";

const Water = () => {
  const [waters, setWaters] = useState([false, false, false, false, false]);

  const change = (i) => {
    setWaters((prev) => {
      const newWaters = [...prev];
      newWaters[i] = !newWaters[i];
      return newWaters;
    });
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(14, 14, 14, 0.7)",
        padding: "10px 90px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <span style={{ color: "white", fontSize: "16px", fontWeight: 600 }}>
        WATER SCORE
      </span>
      <Slider left={waters.filter((v) => v).length * 20} />
      <div>
        {waters.map((v, i) => (
          <WaterButton key={i} change={() => change(i)} isWater={v} />
        ))}
      </div>
    </div>
  );
};

export default Water;
