import React, { Fragment } from "react";

export const Table = ({ data, config, keyFn }) => {
  const renderedHeaders = config.map((header, index) => {
    if (header.header) {
      return <Fragment key={header.label}>{header.header()}</Fragment>;
    }
    return <th key={header.label}>{header.label}</th>;
  });

  const renderedRows = data.map((row) => {
    const renderedCells = config.map((cell, index) => {
      return (
        <th key={cell.label} className="p-2">
          {cell.render(row)}
        </th>
      );
    });
    return (
      <tr className="border-b" key={keyFn(row)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};
