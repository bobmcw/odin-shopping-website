import styles from "../styles/ProductCard.module.css";
function ProductCard({imageUrl, name, description, action, visible=true}) {
  return (
    <div className={styles.card} style={{display: visible ? "flex" : "none"}}>
        <img src={imageUrl} alt="" />
        <div className={styles.cardInfo}>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
        {action}
    </div>
  );
}
export default ProductCard;
