import React from "react";
import "./style.scss";

type PrimaryButtonProps = {
  children: React.ReactNode;
};

const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return (
    <div className="primary-button">
      <div className="container">{children}</div>
    </div>
  );
};

export default PrimaryButton;
