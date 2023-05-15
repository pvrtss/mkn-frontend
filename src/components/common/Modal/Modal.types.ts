import { ReactNode } from "react";

export type ModalProps = {
  children: ReactNode;
  onClose: React.MouseEventHandler;
  onButtonClick: React.MouseEventHandler;
  title: string;
  buttonLabel: string;
  alwaysOnTop?: boolean;
};

export interface OnTopProps {
  alwaysOnTop?: boolean;
}
