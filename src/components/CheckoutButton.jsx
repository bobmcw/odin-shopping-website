import styles from "../styles/CheckoutButton.module.css";

function CheckoutButton({ logo, color, fontColor, text }) {
  return (
    <button style={{ backgroundColor: color }}>
      <div className={styles.inner}>
        {logo}
        <p style={{color: fontColor}}>{text}</p>
      </div>
    </button>
  );
}

export default CheckoutButton