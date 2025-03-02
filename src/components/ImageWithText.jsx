import PropTypes from "prop-types";
import styles from "../styles/ImageWithText.module.css";
import defaultImage from "../assets/noImage.png";

function ImageWithText({ imageUrl=defaultImage, text="missing text", alt="" }) {
  return (
    <div className={styles.imageWithText}>
      <img className={styles.img} src={imageUrl} alt={alt} />
      <p className={styles.p}>{text}</p>
    </div>
  );
}

export default ImageWithText;
