import React from "react";
import ContextMenu from "./ContextMenu.styled";

const ContextMenuComponent = () => {
  return (
    <>
      <ContextMenu.Container>
        <ContextMenu.Label>Edit</ContextMenu.Label>
        <ContextMenu.Label>Delete</ContextMenu.Label>
      </ContextMenu.Container>
    </>
  );
};

export default ContextMenuComponent;
