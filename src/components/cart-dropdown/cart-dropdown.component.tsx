import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItemsContainerRef = useRef<HTMLDivElement>(null);

  const goToCheckoutHandler = useCallback(() => {
    navigate("/checkout");
    dispatch(setIsCartOpen(false));
  }, [dispatch, navigate]);

  useEffect(() => {
    if (cartItemsContainerRef.current) {
      cartItemsContainerRef.current.scrollTop =
        cartItemsContainerRef.current.scrollHeight;
    }
  }, [cartItems]);

  return (
    <CartDropdownContainer style={{ display: isCartOpen ? "block" : "none" }}>
      <CartItems ref={cartItemsContainerRef}>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
