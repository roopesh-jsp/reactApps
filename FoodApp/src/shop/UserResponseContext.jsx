import { createContext, useState } from "react";

export const UserResponseContext = createContext({
  response: "", // cart,checkout
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserResponseContextProvider({ children }) {
  const [userResponse, setUSerResponse] = useState("");
  function showCart() {
    setUSerResponse("cart");
  }
  function hideCart() {
    setUSerResponse("");
  }
  function showCheckout() {
    setUSerResponse("checkout");
  }
  function hideCheckout() {
    setUSerResponse("");
  }
  const userCtx = {
    response: userResponse,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };
  return (
    <UserResponseContext.Provider value={userCtx}>
      {children}
    </UserResponseContext.Provider>
  );
}
export default UserResponseContext;
