import { useState } from "react";

export default function DynamicInputForm() {
  const [inputFields, setInputFields] = useState([{ material: "", step: "" }]);

  const handleAddFields = () => {};

  const handleRemoveFields = (index) => {};

  const handleValueChange = (index, event) => {};

  return (
    <>
      {inputFields.map((inputField, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Enter a value"
            value={inputField.material}
            onChange={(event) => handleValueChange(index, event)}
          />
        </div>
      ))}
    </>
  );
}
