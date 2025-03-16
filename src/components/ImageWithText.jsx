import PropTypes from "prop-types";
import styles from "../styles/ImageWithText.module.css";
import defaultImage from "../assets/noImage.png";

function ImageWithText({ imageUrl=defaultImage, text="missing text", alt="" }) {
  return (
    <div className={styles.imageWithText}>
      <img className={styles.image} src={imageUrl} alt={alt} />
      <p className={styles.paragraph}>{text}</p>
    </div>
  );
}

export default ImageWithText;
