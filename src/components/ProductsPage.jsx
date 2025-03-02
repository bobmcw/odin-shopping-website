import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "../assets/ProductsPage.module.css"
function ProductsPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <>
    <nav className={styles.sideNav}>sideNav</nav>
    <div className={styles.productsPage}>
      {products.map((product) => {
        return (
          <ProductCard
            imageUrl={product.image}
            name={product.title}
            description={product.description}
          />
        );
      })}
    </div>
    </>
  );
}
export default ProductsPage;
