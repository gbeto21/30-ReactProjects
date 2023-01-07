import React from "react";

export default function Title({ clases, text }) {
  return (
    <h1 className={clases ? `${clases} title text-center` : "title"}>
      {text ? text : "Title"}
    </h1>
  );
}
