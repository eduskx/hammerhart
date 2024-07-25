import { useEffect, useState } from "react";

export default function DynamicStepsInput({ setSteps }) {
  const [objects, setObjects] = useState([{ id: "1", description: "" }]);

  function handleAddField() {
    setObjects([...objects, { id: `${objects.length + 1}`, description: "" }]);
  }

  function handleRemoveField(idToRemove) {
    setObjects(objects.filter((object) => object.id !== idToRemove));
  }

  function handleChange(index, event) {
    const newObjects = [...objects];
    newObjects[index].description = event.target.value;
    setObjects(newObjects);
  }

  useEffect(() => {
    setSteps(objects);
  }, [objects, setSteps]);

  return (
    <>
      {objects.map((object, index) => (
        <div key={object.id}>
          <label htmlFor={object.id}></label>
          <input
            id={object.id}
            value={object.description}
            onChange={(event) => handleChange(index, event)}
            type="text"
          />
          <button onClick={() => handleRemoveField(object.id)}>➖</button>
        </div>
      ))}
      <button type="button" onClick={handleAddField}>
        ➕
      </button>
    </>
  );
}
