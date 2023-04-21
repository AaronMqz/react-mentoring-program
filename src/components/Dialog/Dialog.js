import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Dialog from "./Dialog.styled";

import ReactDOM from "react-dom";

const DialogComponent = ({ children, toogle }) => {
  return ReactDOM.createPortal(
    <Dialog.Container>
      <Dialog.Content>
        <Dialog.IconClose aria-label="close" onClick={() => toogle()}>
          <FontAwesomeIcon icon={faXmark} />
        </Dialog.IconClose>
        {children}
      </Dialog.Content>
    </Dialog.Container>,
    document.body
  );
};

export default DialogComponent;
