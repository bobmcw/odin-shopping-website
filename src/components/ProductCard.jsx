import { useState } from "react";
import styles from "../styles/ProductCard.module.css";
import ProductPreview from "./ProductPreview";
function ProductCard({imageUrl, name, description, price, setCart, visible=true}) {
  const [preview, setPreview] = useState(false);
  return (
    <>
      <div className={styles.card} style={{display: visible ? "flex" : "none"}} tabIndex={0} onClick={() => setPreview(true)}>
          <img src={imageUrl} alt="" />
          <div className={styles.cardInfo}>
              <h3>{name}</h3>
              <p>{description}</p>
              <h2>${price}</h2>
          </div>
      </div>
      {preview ? <ProductPreview imageUrl={imageUrl} name={name} description={description} action={setCart} price={price} setPreview={setPreview}/> : ""}
    </>
  );
}
export default ProductCard;
