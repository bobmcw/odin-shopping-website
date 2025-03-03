import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "../assets/ProductsPage.module.css"
import useProductLoader from "../hooks/useProducts";
function ProductsPage() {

  const {error, loading, products, categories } = useProductLoader()
  console.log(categories);
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
