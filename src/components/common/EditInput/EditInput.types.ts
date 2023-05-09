import { SxProps, Theme } from "@mui/material";

export type EditInputOnSaveHandler = (
  value: string,
  e: React.MouseEvent
) => void;

export type EditInputProps = {
  onSave: EditInputOnSaveHandler;
  label: string;
  defaultValue: string;
  multiline?: boolean;
  sx?: SxProps<Theme>;
  mt?: string;
};

export type EditInputWrapProps = {
  mt?: string;
};
