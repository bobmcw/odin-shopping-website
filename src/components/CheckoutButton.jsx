import styles from "../styles/CheckoutButton.module.css";
import AppleIcon from '@mui/icons-material/Apple';

function CheckoutButton({ logo, color, text }) {
  return (
    <button style={{ backgroundColor: color }}>
      <div className={styles.inner}>
        {<AppleIcon color="white"/>}
        <p>{text}</p>
      </div>
    </button>
  );
}

export default CheckoutButton