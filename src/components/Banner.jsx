import styles from "../styles/Banner.module.css";
function Banner({ backgroundImg }) {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${backgroundImg})`, }}
    ></div>
  );
}
export default Banner;
