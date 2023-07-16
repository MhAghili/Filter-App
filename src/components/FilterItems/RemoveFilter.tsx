import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type PropTypes = {
  removeHandler: () => void;
};

const RemoveFilter = (props: PropTypes) => {
  return (
    <div className="ms-auto" onClick={props.removeHandler}>
      <FontAwesomeIcon icon={faTimes} />
    </div>
  );
};

export default RemoveFilter;
