import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";

function DropdownComponent(props) {
  var itemList = props.itemList;
  var [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <>
      <DropdownButton
        as={ButtonGroup}
        key="0"
        id="000"
        size="lg"
        title={itemList[selectedItemIndex]}
        variant=""
        bsPrefix="custom-dropdown buttonText"
        onSelect={(selected) => {
          setSelectedItemIndex(parseInt(selected));
        }}
      >
        {itemList.map((item, idx) => (
          <Dropdown.Item eventKey={idx}>{item}</Dropdown.Item>
        ))}
      </DropdownButton>
    </>
  );
}

export default DropdownComponent;