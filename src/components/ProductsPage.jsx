import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "../assets/ProductsPage.module.css";
import useProductLoader from "../hooks/useProducts";
import ProductFilter from "./ProductFilter";
function ProductsPage() {
  const { error, loading, products, categories } = useProductLoader();
  const [visibleCategories, setVisibleCategories] = useState()

  useEffect(()=> {
      setVisibleCategories(categories.reduce((acc, category) => ({...acc, [category]: true}),{}))
  },[categories])

  useEffect(() => {
    console.log(visibleCategories)
  },[visibleCategories])

  return (
    <>
     <ProductFilter categories={categories} visibleCategories={visibleCategories} setVisibleCategories={setVisibleCategories} /> 
      <div className={styles.productsPage}>
        {products.map((product) => {
          return (
            <ProductCard
              imageUrl={product.image}
              name={product.title}
              description={product.description}
              key={product.id}
              visible={visibleCategories[product.category]}
            />
          );
        })}
      </div>
    </>
  );
}
export default ProductsPage;
