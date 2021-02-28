import React from "react";

const Input = React.forwardRef(({ type, placeholder, name }, ref) => {
  return (
  <input type={type} placeholder={placeholder} name={name} ref={ref} />
  );
});

export default Input;