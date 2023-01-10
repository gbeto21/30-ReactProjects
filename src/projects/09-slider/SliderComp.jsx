import React from "react";

export default function SliderApp({
  setValue,
  handleInput,
  bgColor,
  textColor,
}) {
  const sliderStyle = {
    appearance: "none",
    width: "100%",
    height: 25,
    background: "ligthgreen",
    courser: "pointer",
    opacity: 0.9,
  };

  return (
    <div className="d-flex flex-column" style={{ gap: 100 }}>
      <input
        type="range"
        min="0"
        max={100}
        value={setValue}
        onInput={handleInput}
        style={sliderStyle}
      />
      <div
        style={{
          color: textColor ? textColor : "black",
          background: bgColor ? bgColor : "lightgray",
          height: `${setValue * 3}px`,
          width: `${setValue * 3}px`,
          fontWeight: 600,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
        }}
      >
        <span>{setValue}</span>
      </div>
    </div>
  );
}
