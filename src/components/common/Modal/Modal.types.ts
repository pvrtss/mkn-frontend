import { ReactNode } from "react";

export type ModalProps = {
  children: ReactNode;
  onClose: React.MouseEventHandler;
  title: string;
  buttonLabel: string;
};
