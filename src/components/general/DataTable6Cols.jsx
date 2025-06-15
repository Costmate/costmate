import React from "react";

const statusStyles = {
  "New Order": "#550948",
  "In Progress": "#f97316", // Tailwind orange-500
  "Delivered": "#22c55e",   // Tailwind green-500
};

export function Status({ status }) {
  const dotColor = statusStyles[status] || "#d1d5db"; // fallback: gray-300

  return (
    <div className="inline-flex items-center px-3 py-1 rounded-full bg-white shadow-sm text-sm font-medium">
      <span
        className="w-2.5 h-2.5 rounded-full mr-2"
        style={{ backgroundColor: dotColor }}
      ></span>
      {status}
    </div>
  );
}

export function Items({ item, amount }) {
  return (
    <div className="flex flex-col items-start text-sm">
      <span className="text-black font-medium">{item}</span>
      {amount && <span className="text-gray-500">{amount}x</span>}
    </div>
  );
}

export function DataRow({
  isHeader = false,
  cell1,
  cell2,
  cell3,
  cell4,
  cell5,
  cell6,
}) {
  return (
    <div
      className={`w-full px-4 py-3 border-b border-gray-200 text-sm ${
        isHeader ? "hidden lg:flex font-semibold text-gray-600 uppercase bg-gray-50" : "flex"
      } flex-col lg:flex-row items-start lg:items-center justify-between`}
    >
      {/* Left group for mobile, all inline on lg */}
      <div className="flex flex-col lg:flex-1 gap-1 lg:flex-row lg:gap-4">
        <span>{cell1}</span>
        <span>{cell2}</span>
        <span>{cell3}</span>
      </div>

      {/* Right group for mobile, all inline on lg */}
      <div className="flex flex-col lg:flex-1 gap-1 lg:flex-row lg:gap-4 lg:justify-end">
        <span>{cell4}</span>
        <span>{cell5}</span>
        <span>{cell6}</span>
      </div>
    </div>
  );
}


export default function DataTable6Cols({ tableData }) {
  const { headers, data } = tableData;

  return (
    <div className="w-full">
      {/* Header row */}
      <DataRow
        isHeader={true}
        cell1={headers.cell1}
        cell2={headers.cell2}
        cell3={headers.cell3}
        cell4={headers.cell4}
        cell5={headers.cell5}
        cell6={headers.cell6}
      />

      {/* Data rows */}
      {data.map((row, index) => (
        <DataRow
          key={index}
          isHeader={false}
          cell1={row.cell1}
          cell2={row.cell2}
          cell3={row.cell3}
          cell4={row.cell4}
          cell5={row.cell5}
          cell6={row.cell6}
        />
      ))}
    </div>
  );
}
