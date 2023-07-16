
type PropTypes = {
  message: string;
};

const Error = (props: PropTypes) => {
  return (
    <div className="alert alert-danger" role="alert">
      {props.message}
    </div>
  );
};

export default Error;
