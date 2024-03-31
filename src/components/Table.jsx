import React from "react";

export const Table = ({ data, config, keyFn }) => {
  const renderedHeaders = config.map((header, index) => {
    return <th key={header.label}>{header.label}</th>;
  });

  const renderedRows = data.map((row) => {
    const renderedCells = config.map((cell, index) => {
      return (
        <td key={cell.label} className="p-2">
          {cell.render(row)}
        </td>
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
