import { useReducer, useState } from "react";
import "./App.css";
import { OsmBBox, FormAction } from "./types";
import callOSMMapBBox from "./utils/osmBBoxAPI";
import LabelledInput from "./components/ui/LabelledInput";
import OutputTextBox from "./components/OutputTextBox";

import { isValidLatitude, isValidLongitude } from "./utils/validations";
import convertOSMtoGeojsonString from "./utils/osmToJsonConvertor";
import APIErrorMessage from "./components/APIErrorMessage";

const formReducer = (state: OsmBBox, action: FormAction) => {
  switch (action.type) {
    case "UPDATE_INPUT":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

function App() {
  const initialState: OsmBBox = {
    left: "",
    bottom: "",
    right: "",
    top: "",
  };

  const [state, dispatch] = useReducer(formReducer, initialState);
  const [isFetching, setIsFetching] = useState(false);
  const [jsonResult, setJsonResult] = useState("");
  const [apiError, setApiError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_INPUT", field: name, value });
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    setIsFetching(true);
    setJsonResult("");
    setApiError("");

    const { data, error } = await callOSMMapBBox(state);

    setIsFetching(false);

    if (data) {
      setJsonResult(convertOSMtoGeojsonString(data));
      setApiError("");
    } else if (typeof error === "string") {
      setJsonResult("");
      setApiError(error);
    } else {
      setJsonResult("");
      setApiError("An unxpected error has occured!");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <LabelledInput
          inputLabel="Westernmost longitude:"
          inputName="left"
          inputValue={state.left}
          onInputChange={handleInputChange}
          hasError={!isValidLongitude(state.left)}
        />
        <LabelledInput
          inputLabel="Southernmost latitude:"
          inputName="bottom"
          inputValue={state.bottom}
          onInputChange={handleInputChange}
          hasError={!isValidLatitude(state.bottom)}
        />
        <LabelledInput
          inputLabel="Easternmost longitude:"
          inputName="right"
          inputValue={state.right}
          onInputChange={handleInputChange}
          hasError={!isValidLongitude(state.right)}
        />
        <LabelledInput
          inputLabel="Northernmost latitude:"
          inputName="top"
          inputValue={state.top}
          onInputChange={handleInputChange}
          hasError={!isValidLatitude(state.top)}
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
      {isFetching && <OutputTextBox outputText={"loading..."} />}
      {jsonResult && <OutputTextBox outputText={jsonResult} />}
      {apiError && <APIErrorMessage erorMessage={apiError} />}
    </div>
  );
}

export default App;
