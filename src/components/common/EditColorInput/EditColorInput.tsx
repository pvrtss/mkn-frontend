import React, { useState } from "react";

import { EditColorInputProps } from "./EditColorInput.types";
import { EditInputWrap } from "../EditInput/EditInput.style";
import { ColorPicker } from "../ColorPicker";
import { IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";

export const EditColorInput: React.FC<EditColorInputProps> = ({
  initialColor,
  onSave,
  mt,
}) => {
  const [color, setColor] = useState<string>(initialColor);
  const [beingEdited, setBeingEdited] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleColorChange = (passedColor: any) => {
    setColor(passedColor);
    //alert(color);
  };

  const handleEditClick = () => {
    setBeingEdited(true);
  };

  const handleCancelClick = () => {
    setBeingEdited(false);
  };

  const handleSave = () => {
    if (color !== initialColor) onSave(color);
    handleCancelClick();
  };

  return (
    <EditInputWrap mt={mt}>
      <ColorPicker
        initialColor={initialColor}
        onChange={handleColorChange}
        disabled={!beingEdited}
        title="Цвет"
      />
      {beingEdited ? (
        <>
          <IconButton onClick={handleSave} color="primary" aria-label="save">
            <CheckIcon />
          </IconButton>
          <IconButton
            onClick={handleCancelClick}
            color="error"
            aria-label="dismiss"
          >
            <CloseIcon />
          </IconButton>
        </>
      ) : (
        <IconButton onClick={handleEditClick} color="default" aria-label="edit">
          <EditIcon />
        </IconButton>
      )}
    </EditInputWrap>
  );
};
