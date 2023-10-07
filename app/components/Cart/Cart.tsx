import PrimaryButton from "../primaryButton/PrimaryButton";
import thumbnailOne from "../../assets/images/image-product-1-thumbnail.jpg";
import deleteLogo from "../../assets/images/icon-delete.svg";
import "./style.scss";
import Image from "next/image";

const Cart = () => {
  return (
    <div id="cart">
      <div className="header">
        <h2>Cart</h2>
      </div>

      <div className="details">
        <div className="left">
          <div className="thumbnail">
            <Image src={thumbnailOne} alt="product" />
          </div>
          <div className="text">
            <div className="name">Fall Limited Edition Sneakers</div>
            <div className="price">
              $125.00 × 3 <span className="highlight">$375.00</span>
            </div>
          </div>
        </div>
        <div className="delete-container">
          <Image src={deleteLogo} alt="delete" />
        </div>
      </div>
      <div className="button-container">
        <PrimaryButton>
          <span>Checkout</span>
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Cart;
