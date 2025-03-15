import { useState } from "react";
import styles from "../styles/ProductPreview.module.css";
function ProductPreview({ imageUrl, name, description, action }) {
    const [amount, setAmount] = useState(1);
function handleDecrese(amount){
    if(amount <= 1){
        setAmount(1);
    }
    else {
        setAmount(amount-1)
    }
}
  return (
    <div className={styles.cover}>
        <div className={styles.preview}>
          <img src={imageUrl} alt="" />
          <div className={styles.text}>
            <h1>{name}</h1>
            <p>{description}</p>
            <div className={styles.addToCard}>
                <button onClick={() => handleDecrese(amount-1)}>-</button>
                <input type="number" name="amount" id="amount" value={amount} />
                <button onClick={() => setAmount(amount+1)}>+</button>
                <button onClick={() => action}>add to card</button>
                </div>
          </div>
        </div>
    </div>
  );
}
export default ProductPreview;
