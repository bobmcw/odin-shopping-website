import Banner from "./Banner";
import styles from "../styles/App.module.css";
import ImageWithText from "./ImageWithText";
import banner from "../assets/banner.jpeg"
import placeholder1 from "../assets/placeholder1.jpeg"

function App() {
  return (
    <div className={styles.page}>
      <Banner backgroundImg={banner} />
      <ImageWithText imageUrl={placeholder1} alt="new arrivals" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

/>
    </div>
  );
}

export default App;
