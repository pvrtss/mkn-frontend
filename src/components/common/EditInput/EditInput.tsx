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
  const [value, setValue] = useState<string>(defaultValue);

  const handleEditClick = () => {
    setBeingEdited(true);
  };

  const handleCancelClick = () => {
    setValue(defaultValue);
    setBeingEdited(false);
  };

  const handleSave = (e: React.MouseEvent) => {
    if (value !== defaultValue) onSave(value, e);
    setBeingEdited(false);
  };
  return (
    <EditInputWrap mt={mt}>
      <TextField
        margin="none"
        sx={sx ? { ...sx, ...TextFieldSx } : { ...TextFieldSx }}
        variant="standard"
        fullWidth
        multiline={multiline}
        minRows={multiline ? 3 : undefined}
        disabled={!beingEdited}
        label={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
