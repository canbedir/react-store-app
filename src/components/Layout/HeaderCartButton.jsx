import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartProvider";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";

const HeaderCartButton = ({ onShowCart, cartIsShow }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalItemsInCart = cartCtx.items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount;
  }, 0);

  useEffect(() => {
    if (cartCtx.items.length === 0 || cartIsShow === true) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button
      className={`button ${btnIsHighlighted && "bump"}`}
      onClick={onShowCart}
    >
      <span className="icon">
        <CartIcon />
      </span>
      <span>Sepetim</span>
      <span className="badge">{totalItemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
