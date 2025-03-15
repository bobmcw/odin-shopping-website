import { useState } from "react";
import styles from "../styles/ProductPreview.module.css";
function ProductPreview({ imageUrl, name, description, action, setPreview }) {
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
    <div className={styles.cover}  onClick={(e) => {
            if(e.target.classList.contains(styles.cover)){
                setPreview(false);
            }
        }}>
        <div className={styles.preview}>
        <button className={styles.close} onClick={() => setPreview(false)}>X</button>
          <img src={imageUrl} alt="" />
          <div className={styles.text}>
            <h1>{name}</h1>
            <p>{description}</p>
            <div className={styles.addToCard}>
                <button onClick={() => handleDecrese(amount)}>-</button>
                <input type="number" name="amount" id="amount" value={amount} onChange={(e) => {setAmount(e.target.value)}} />
                <button onClick={() => setAmount(amount+1)}>+</button>
                <button onClick={() => action}>add to card</button>
                </div>
          </div>
        </div>
    </div>
  );
}
export default ProductPreview;
