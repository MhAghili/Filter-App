import React from "react";

type Prototype = {
  message: string;
};

const Error: React.FC<Prototype> = (props: Prototype) => {
  return (
    <div className="alert alert-danger" role="alert">
      {props.message}
    </div>
  );
};

export default Error;
