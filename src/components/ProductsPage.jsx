import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "../assets/ProductsPage.module.css";
import useProductLoader from "../hooks/useProducts";
function ProductsPage() {
  const { error, loading, products, categories } = useProductLoader();
  return (
    <>
      <nav className={styles.sideNav}>
        {categories.map((category) => {
          return (
            <div className="cateogory">
              <input
                type="checkbox"
                id={category}
                name={category}
                checked
              ></input>
              <label htmlFor={category}>{category}</label>
            </div>
          );
        })}
      </nav>
      <div className={styles.productsPage}>
        {products.map((product) => {
          return (
            <ProductCard
              imageUrl={product.image}
              name={product.title}
              description={product.description}
              key={product.id}
            />
          );
        })}
      </div>
    </>
  );
}
export default ProductsPage;
