import React, { useState } from "react";

import { EditDateTimePickerProps } from "./EditDateTimePicker.types";
import { DateTimePicker } from "@mui/x-date-pickers";
import { EditInputWrap } from "../EditInput/EditInput.style";
import { IconButton, TextField } from "@mui/material";
import { TextFieldSx } from "../TextField.styles";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import dayjs, { Dayjs } from "dayjs";

export const EditDateTimePicker: React.FC<EditDateTimePickerProps> = ({
  mt,
  defaultValue,
  onSave,
}) => {
  const [deadline, setDeadline] = useState<Dayjs | null>(dayjs(+defaultValue));
  const [beingEdited, setBeingEdited] = useState<boolean>(false);
  const handleEditClick = () => {
    setBeingEdited(true);
  };

  const handleCancelClick = (e: React.MouseEvent) => {
    setDeadline(dayjs(+defaultValue));
    onSave(defaultValue, e);
    setBeingEdited(false);
  };

  const handleSave = (e: React.MouseEvent) => {
    if (deadline?.valueOf() !== +defaultValue)
      onSave(deadline === null ? "" : deadline.valueOf().toString(), e);
    setBeingEdited(false);
  };

  return (
    <EditInputWrap mt={mt}>
      <DateTimePicker
        sx={{ ...TextFieldSx, maxWidth: "200px" }}
        label="Дата и время отправки"
        disabled={!beingEdited}
        value={deadline}
        onChange={(ts) => setDeadline(ts)}
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
