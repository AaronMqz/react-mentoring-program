import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { DropDown } from "./DropDown.styled";

const Checkbox = ({ label, checked, onChange, selectedItems }) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleChange = (e) => {
    setIsChecked((prev) => !prev);
    const array = [...selectedItems];
    selectedItems.indexOf(e.target.name) === -1
      ? array.push(e.target.name)
      : array.splice(array.indexOf(e.target.name), 1);
    onChange(array);
  };

  return (
    <DropDown.CheckboxContainer>
      <label>
        <DropDown.Checkbox
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          name={label}
        />
        <DropDown.Label>{label}</DropDown.Label>
      </label>
    </DropDown.CheckboxContainer>
  );
};

const DropDownOptionsComponent = ({ selectedItems, optionList, onChange }) => {
  const [showList, setShowList] = useState(false);
  const [items, setItems] = useState(selectedItems);
  const ref = useRef(null);

  const handleShowList = () => {
    setShowList(!showList);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showList && ref.current && !ref.current.contains(e.target)) {
        handleShowList();
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showList]);

  useEffect(() => {
    return onChange(items);
  }, [items]);

  useEffect(() => {
    if (selectedItems !== items) {
      setItems(selectedItems);
    }
  }, [selectedItems]);

  return (
    <DropDown.Container ref={ref}>
      <DropDown.SelectedText onClick={() => handleShowList()}>
        {items.join(", ")}
        <FontAwesomeIcon
          icon={showList ? faCaretUp : faCaretDown}
          color={"#f64261"}
        />
      </DropDown.SelectedText>
      {showList && (
        <DropDown.List>
          {optionList.map((item) => {
            return (
              <Checkbox
                key={item}
                label={item}
                checked={items.indexOf(item) !== -1}
                selectedItems={items}
                onChange={(newItems) => setItems(newItems)}
              />
            );
          })}
        </DropDown.List>
      )}
    </DropDown.Container>
  );
};

export default DropDownOptionsComponent;
