"use client";

type IncreaseButtonProps = {
  handleQuantityChange: (quantity: number) => void;
  quantity: number;
};

const IncreaseButton: React.FC<IncreaseButtonProps> = ({
  handleQuantityChange,
  quantity,
}) => {
  return (
    <div className="counter-button">
      <span
        className="orange"
        onClick={() => {
          if (quantity > 1) {
            handleQuantityChange(quantity - 1);
          }
        }}
      >
        -
      </span>
      <span>{quantity}</span>
      <span
        className="orange"
        onClick={() => handleQuantityChange(quantity + 1)}
      >
        +
      </span>
    </div>
  );
};

export default IncreaseButton;
