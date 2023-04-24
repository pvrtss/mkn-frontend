import React, { useState } from "react";

import { EditInputProps } from "./EditInput.types";
import { EditInputWrap } from "./EditInput.style";
import { IconButton, TextField } from "@mui/material";
import { TextFieldSx } from "../TextField.styles";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";

export const EditInput: React.FC<EditInputProps> = ({
  onSave,
  label,
  defaultValue,
  multiline,
  sx,
  mt,
}) => {
  const [beingEdited, setBeingEdited] = useState<boolean>(false);

  const handleEditClick = () => {
    setBeingEdited(true);
  };

  const handleCancelClick = () => {
    setBeingEdited(false);
  };

  const handleSave = (e: React.MouseEvent) => {
    onSave(e);
    handleCancelClick();
  };
  return (
    <EditInputWrap mt={mt}>
      <TextField
        margin="none"
        sx={sx ? { ...sx, ...TextFieldSx } : { ...TextFieldSx }}
        variant="standard"
        fullWidth
        multiline={multiline}
        disabled={!beingEdited}
        label={label}
        defaultValue={defaultValue}
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
