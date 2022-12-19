import { useState } from "react";
import Header from "./commponents/Layout/Header";
import Meals from "./commponents/Meals/Meals";
import Cart from "./commponents/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App(props) {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };
  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
