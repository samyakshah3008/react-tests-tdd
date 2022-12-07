import React from "react";

export default function StarbucksInput({ name, value, onChange, error }) {
  return (
    <>
      <label htmlFor="starbucks"> {name} </label>
      <input
        type="text"
        id="starbucks"
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div>{error}</div>
    </>
  );
}
