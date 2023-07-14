import React from "react";

type PropTypes = {
  message: string;
};

const Error: React.FC<PropTypes> = (props: PropTypes) => {
  return (
    <div className="alert alert-danger" role="alert">
      {props.message}
    </div>
  );
};

export default Error;
