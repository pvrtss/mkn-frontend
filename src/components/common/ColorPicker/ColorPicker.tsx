import React, { useState } from "react";

import { ColorPickerProps } from "./ColorPicker.types";
import { PickerContainer, PickerHelper, PickerWrap } from "./ColorPicker.style";
import { SliderPicker } from "react-color";

export const ColorPicker: React.FC<ColorPickerProps> = ({
  initialColor,
  onChange,
  title,
  disabled,
  mt,
}) => {
  const [color, setColor] = useState<string>(initialColor);
  const handleColorChange = (passedColor: any) => {
    onChange(passedColor.hex);
    setColor(passedColor.hex);
  };
  return (
    <PickerWrap>
      <PickerHelper marginTop={mt}>{title}</PickerHelper>
      <PickerContainer opacity={disabled ? "0.33" : "1"}>
        <SliderPicker
          color={color}
          onChange={disabled ? undefined : handleColorChange}
        />
      </PickerContainer>
      <PickerHelper>{color}</PickerHelper>
    </PickerWrap>
  );
};
