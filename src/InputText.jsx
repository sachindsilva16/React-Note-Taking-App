import React from "react";

const InputText = (props) => {
  return (
    <input
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export default InputText;
