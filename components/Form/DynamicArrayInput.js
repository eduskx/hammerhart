import { useEffect, useState } from "react";

export default function DynamicArrayInput({ setterFunction }) {
  const [listItems, setListItems] = useState([""]);

  function handleAddField() {
    setListItems([...listItems, ""]);
  }

  function handleRemoveField(indexToRemove) {
    setListItems(listItems.filter((_, index) => index !== indexToRemove));
  }

  function handleChange(index, event) {
    const newListItems = [...listItems];
    newListItems[index] = event.target.value;
    setListItems(newListItems);
  }

  useEffect(() => {
    setterFunction(listItems);
  }, [listItems, setterFunction]);

  return (
    <>
      {listItems.map((listItem, index) => (
        <div key={index}>
          <label htmlFor={index}></label>
          <input
            id={index}
            value={listItem}
            onChange={(event) => handleChange(index, event)}
            type="text"
          />
          <button onClick={() => handleRemoveField(index)}>➖</button>
        </div>
      ))}
      <button type="button" onClick={handleAddField}>
        ➕
      </button>
    </>
  );
}
