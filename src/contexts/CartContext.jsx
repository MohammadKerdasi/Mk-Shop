import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const [itemAmount, setItemAmount] = useState(0)

  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = cart.reduce((acc, currentItem) => {
      return acc + currentItem.price * currentItem.amount;
    }, 0)
    setTotal(total);
  });
  

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, currentItem) => {
        return acc + currentItem.amount;
      }, 0);
    setItemAmount(amount)
    }
  
  }, [cart])
  

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    console.log(cartItem);
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if(item.id === id){
          return{...item, amount: cartItem.amount - 1};
        } else {
          return item ;
        }
      });
      setCart(newCart)
  } 

    if (cartItem.amount < 2){
      removeFromCart(id);
    }
  
  }

  useEffect(() => {
    const totalItems = cart.reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
    setItemAmount(totalItems);
  }, [cart]);
  return (
    <CartContext.Provider
      value={{
        addToCart, 
        cart, 
        removeFromCart, 
        clearCart , 
        increaseAmount,
        decreaseAmount,
        itemAmount ,
        setItemAmount,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
