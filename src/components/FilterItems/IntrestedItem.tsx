const IntrestedItem: React.FC<{
  onHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  intrestedItem: string;
}> = (props) => {
  return (
    <div className="form-check ">
      <input
        type="checkbox"
        className="form-check-input"
        id={props.intrestedItem}
        value={props.intrestedItem}
        onChange={props.onHandleChange}
      />
      <label className="form-check-label" htmlFor={props.intrestedItem}>
        {props.intrestedItem}
      </label>
    </div>
  );
};

export default IntrestedItem;
