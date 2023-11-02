"use client";
import { CustomButtomProps } from "@/types";
import React from "react";

const CustomButton = ({
  title,
  contrainerStyle,
  handleClick,
}: CustomButtomProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${contrainerStyle}`}
      onClick={handleClick}
    >
      <span className={"flex-1"}>{title}</span>
    </button>
  );
};

export default CustomButton;
