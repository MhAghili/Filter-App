import React from "react";

const Error: React.FC<{ message: string }> = (props) => {
  return (
    <div className="alert alert-danger" role="alert">
      {props.message}
    </div>
  );
};

export default Error;
