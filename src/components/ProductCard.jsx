import styles from "../styles/ProductCard.module.css";
function ProductCard({imageUrl, name, description, action}) {
  return (
    <div className={styles.card}>
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
