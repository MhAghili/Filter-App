import React from "react";

type PropTypes = {
  children: React.ReactNode;
};

// in component ro baraye tamamiye result ha va peygham ha mesle searching noResult noUser va ... estefade kardam

const ResultCard = (props: PropTypes) => {
  return <div className="fs-2">{props.children}</div>;
};

export default ResultCard;
