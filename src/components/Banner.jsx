import styles from "../styles/Banner.module.css";
function Banner({ backgroundImg }) {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: backgroundImg }}
    ></div>
  );
}
export default Banner;
