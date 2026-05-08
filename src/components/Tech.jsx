import React from "react";
import BallCanvas from "./canvas/Ball";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div
      className="section-padding"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "40px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {technologies.map((technology) => (
        <div key={technology.name} style={{ width: "112px", height: "112px" }}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
