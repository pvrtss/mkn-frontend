import { ColorPickerHandler } from "../ColorPicker/ColorPicker.types";

export type EditColorInputProps = {
  onSave: ColorPickerHandler;
  initialColor: string;
  mt?: string;
};
