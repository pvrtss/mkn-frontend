import { EditInputOnSaveHandler } from "../EditInput/EditInput.types";

export type ColorPickerHandler = (color: any) => void;

export type ColorPickerProps = {
  initialColor: string;
  onChange: ColorPickerHandler;
  title: string;
  disabled?: boolean;
  mt?: string;
};

export type PickerHelperProps = {
  marginTop?: string;
};

export type PickerContainerProps = {
  opacity?: string;
};
