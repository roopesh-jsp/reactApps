import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import { CartContextProvider } from "./shop/CartContext.jsx";
import { UserResponseContextProvider } from "./shop/UserResponseContext.jsx";

function App() {
  return (
    <UserResponseContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserResponseContextProvider>
  );
}

export default App;
