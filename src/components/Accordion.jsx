import React from "react";

export const Accordion = ({ items }) => {
  const renderedItems = items.map((item) => {
    return (
      <ul key={item.id}>
        <li>{item.label}</li>
        <li>{item.content}</li>
      </ul>
    );
  });
  return <div>{renderedItems}</div>;
};
