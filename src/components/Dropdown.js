import React from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const renderedOptions = options.map((option) => {
    if (selected.value === option.value) {
      return null;
    }

    return (
      <div
        className="item"
        key={option.value}
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label htmlFor="" className="label">
          Select a color
        </label>
        <div className="ui selection visible dropdown active">
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className="menu visible transition">{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
