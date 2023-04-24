import { SxProps, Theme } from "@mui/material";

export type EditInputProps = {
  onSave: React.MouseEventHandler;
  label: string;
  defaultValue: string;
  multiline?: boolean;
  sx?: SxProps<Theme>;
  mt?: string;
};

export type EditInputWrapProps = {
  mt?: string;
};
