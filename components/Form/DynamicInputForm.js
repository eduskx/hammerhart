import { useState } from "react";

export default function DynamicInputForm({ listType }) {
  const [inputFields, setInputFields] = useState([{[listType]: ""}]);

  const handleAddFields = () => {
    setInputFields([...inputFields, { [listType]: "" }]);
  };

  const handleRemoveFields = (index) => {
    const newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
  };

  const handleValueChange = (index, event) => {
    const values = [...inputFields];
    values[index][listType] = event.target.value;
    setInputFields(values);

    console.log(inputFields);
  };

  return (
    <>
      {inputFields.map((inputField, index) => (
        <div key={index}>
          <label htmlFor={listType}></label>
          <input
          id={listType}
          name={listType}
            type="text"
            placeholder="Enter a value"
            value={[inputField[listType]]}
            onChange={(event) => handleValueChange(index, event)}
          />
          <button onClick={() => handleRemoveFields(index)}>Delete</button>
        </div>
      ))}

      <button onClick={handleAddFields}>Add {listType}</button>
    </>
  );
}
