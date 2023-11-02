import { MouseEventHandler } from "react";

export interface CustomButtomProps {
  title: string;
  contrainerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?:string
}
