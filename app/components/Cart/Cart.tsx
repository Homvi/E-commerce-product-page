import PrimaryButton from "../primaryButton/PrimaryButton";
import thumbnailOne from "../../assets/images/image-product-1-thumbnail.jpg";
import deleteLogo from "../../assets/images/icon-delete.svg";
import "./style.scss";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { setCart } from "../../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector((state: RootState) => state.cart);
  if (itemCount === 0) {
    return;
  }

  const handleSetCartValue = (value: number) => {
    dispatch(setCart(value));
  };

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
              $125.00 × {itemCount}{" "}
              <span className="highlight">${125 * itemCount} </span>
            </div>
          </div>
        </div>
        <div className="delete-container">
          <Image
            src={deleteLogo}
            alt="delete"
            onClick={() => handleSetCartValue(0)}
          />
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
