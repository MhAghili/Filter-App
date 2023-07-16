type PropTypes = {
  onHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  items: string;
};

const CheckBoxItem: React.FC<PropTypes> = (props: PropTypes) => {
  return (
    <div className="form-check ">
      <input
        type="checkbox"
        className="form-check-input"
        value={props.items}
        onChange={props.onHandleChange}
      />
      <label className="form-check-label" htmlFor={props.items}>
        {props.items}
      </label>
    </div>
  );
};

export default CheckBoxItem;
