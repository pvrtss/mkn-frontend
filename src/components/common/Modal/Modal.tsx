import React from "react";

import { ModalProps } from "./Modal.types";
import { BodyPortal } from "../BodyPortal";
import { Fader, ModalWrap, ModalContent, ModalTitle } from "./Modal.style";
import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton } from "@mui/material";

export const Modal: React.FC<ModalProps> = ({
  children,
  onClose,
  title,
  buttonLabel,
  onButtonClick,
}) => {
  const handleButtonClick = (e: React.MouseEvent) => {
    onButtonClick(e);
    onClose(e);
  };
  return (
    <BodyPortal>
      <Fader />

      <ModalWrap>
        <ModalContent>
          <ModalTitle>{title}</ModalTitle>
          {children}
          <IconButton
            sx={{ position: "absolute", top: "37px", right: "37px" }}
            aria-label="close"
            onClick={onClose}
          >
            <CloseIcon color="disabled" />
          </IconButton>
          <Button
            sx={{ position: "absolute", bottom: "50px", right: "50px" }}
            variant="contained"
            onClick={handleButtonClick}
          >
            {buttonLabel}
          </Button>
        </ModalContent>
      </ModalWrap>
    </BodyPortal>
  );
};
