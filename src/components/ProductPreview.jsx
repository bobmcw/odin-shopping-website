import { useState } from "react";
import styles from "../styles/ProductPreview.module.css";
import { useNavigate } from "react-router-dom";

function ProductPreview({
  imageUrl,
  name,
  description,
  cart,
  setCart,
  price,
  setPreview,
}) {
  const [amount, setAmount] = useState(1);
  const [added,setAdded] = useState(false);
  const navigate = useNavigate();
  function handleDecrese(amount) {
    if (amount <= 1) {
      setAmount(1);
    } else {
      setAmount(amount - 1);
    }
  }
  function handleAddToCart(name, imageUrl, price, amount) {
    setAdded(true);
    setCart(prev => {
      const newCart = new Map(prev);
      if(newCart.has(name)){
        const item = newCart.get(name);
        newCart.set(name, {...item, amount: item.amount+amount});
      }
      else {
        newCart.set(name, {imageUrl, price, amount});
      }
      return newCart;
    });
  }
  return (
    <div
      className={styles.cover}
      onClick={(e) => {
        if (e.target.classList.contains(styles.cover)) {
          setPreview(false);
        }
      }}
    >
      <div className={styles.preview}>
        <button className={styles.close} onClick={() => setPreview(false)}>
          X
        </button>
        <img src={imageUrl} alt="" />
        <div className={styles.text}>
          <h1>{name}</h1>
          <p>{description}</p>
          <h2>${price}</h2>
          <div className={styles.addToCard}>
            {!added ? 
            <>
            <button onClick={() => handleDecrese(amount)}>-</button>
            <input
              type="number"
              name="amount"
              id="amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
            <button onClick={() => setAmount(amount + 1)}>+</button>
            <button onClick={() => handleAddToCart(name, imageUrl, price, amount)}>add to card</button>
            </> : 
            <>
            <h1 style={{textAlign: "center"}}>Item added!</h1>
            <div className={styles.itemAdded}>
              <button onClick={() => navigate("/checkout")}>go to checkout</button>
              <button onClick={() => setPreview(false)} >continue shopping</button>
            </div>
            </>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductPreview;
