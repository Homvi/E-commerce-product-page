import React from "react";
import "./style.scss";

type PrimaryButtonProps = {
  children: React.ReactNode;
  handleAddToCart?: () => void;
};

const PrimaryButton = ({ children, handleAddToCart }: PrimaryButtonProps) => {
  return (
    <div className="primary-button" onClick={handleAddToCart}>
      <div className="container">{children}</div>
    </div>
  );
};

export default PrimaryButton;
