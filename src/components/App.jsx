import Banner from "./Banner";
import styles from "../styles/App.module.css";
import { useEffect } from "react";
import ImageWithText from "./ImageWithText";
import banner from "../assets/banner.jpeg"

function App() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className={styles.page}>
      <h1>Store</h1>
      <Banner backgroundImg={banner} />
      <ImageWithText />
    </div>
  );
}

export default App;
