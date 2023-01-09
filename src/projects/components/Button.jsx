import React from "react";

export default function Button({ text = "click", clases, icon, onClick }) {
  return (
    <button className={`btn ${clases}`} onClick={onClick}>
      {icon} {text}
    </button>
  );
}
