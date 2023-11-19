interface Props {
  inputLabel: string;
  inputName: string;
  inputValue: string;
  hasError?: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({
  inputName,
  inputValue,
  onInputChange,
  inputLabel,
  hasError = false,
}: Props): JSX.Element {
  console.log("here", hasError);
  return (
    <div className="labelled-input-container">
      <label>
        <span className="label">{inputLabel}</span>
        <input
          type="number"
          name={inputName}
          value={inputValue}
          onChange={onInputChange}
          placeholder="Enter number here"
          className={`beautiful-input ${hasError ? "error-border" : ""}`}
        />
      </label>
    </div>
  );
}

export default LabelledInput;
