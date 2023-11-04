"use client";
import { CustomButtomProps } from "@/types";
import Image from "next/image";
import React from "react";

const CustomButton = ({
  title,
  contrainerStyle,
  handleClick,
  btnType,
  textStyles,
  isDisabled,
  rightIcon,
}: CustomButtomProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${contrainerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="rightIcon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
