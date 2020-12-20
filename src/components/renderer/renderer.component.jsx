import React from "react";

const renderer = (data) => {
  return React.createElement(
    data.component,
    {
      ...data.attributes
    },
    data.children &&
      (typeof data.children === "string"
        ? data.children
        : data.children.map((c) => renderer(c)))
  );
};

export default renderer;
