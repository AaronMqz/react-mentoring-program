import React, { useEffect, useState, useRef } from "react";
import SortControl from "./SortControl.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { SortByOptions } from "../../utils";

const SortControlComponent = ({ current, onChange }) => {
  const [showList, setShowList] = useState(false);
  const ref = useRef(null);
  const handleShowList = () => {
    setShowList(!showList);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showList && ref.current && !ref.current?.contains(e.target)) {
        handleShowList();
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showList]);

  return (
    <SortControl.SortConatiner>
      <SortControl.LabelSort>SORT BY</SortControl.LabelSort>
      <SortControl.Container
        ref={ref}
        onClick={() => handleShowList()}
        aria-label="current-sort"
      >
        <SortControl.SelectedText>
          {SortByOptions.find((item) => item.id === current)?.name}
          <FontAwesomeIcon icon={showList ? faCaretUp : faCaretDown} />
        </SortControl.SelectedText>

        {showList && (
          <SortControl.List aria-label="options">
            {SortByOptions.map((item) => {
              return (
                <SortControl.Item
                  aria-label={"sort-" + item.id}
                  key={item.id}
                  id={item.id}
                  onClick={() => onChange(item.name)}
                >
                  {item.name}
                </SortControl.Item>
              );
            })}
          </SortControl.List>
        )}
      </SortControl.Container>
    </SortControl.SortConatiner>
  );
};

export default SortControlComponent;
