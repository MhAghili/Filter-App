type Prototype = {
  onHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  intrestedItem: string;
};


const checkBoxItem: React.FC<Prototype> = (props: Prototype) => {
  return (
    <div className="form-check ">
      <input
        type="checkbox"
        className="form-check-input"
        value={props.intrestedItem}
        onChange={props.onHandleChange}
      />
      <label className="form-check-label" htmlFor={props.intrestedItem}>
        {props.intrestedItem}
      </label>
    </div>
  );
};

export default checkBoxItem;
