import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "../assets/ProductsPage.module.css";
import useProductLoader from "../hooks/useProducts";
import ProductFilter from "./ProductFilter";
function ProductsPage() {
  const { error, loading, products, categories } = useProductLoader();
  const [visibleCategories, setVisibleCategories] = useState()
  const [search, setSearch] = useState("");
  const regex = new RegExp(`.*${search.toLowerCase()}.*`);

  useEffect(()=> {
      setVisibleCategories(categories.reduce((acc, category) => ({...acc, [category]: true}),{}))
  },[categories])

  return (
    <>
     <ProductFilter categories={categories} visibleCategories={visibleCategories} setVisibleCategories={setVisibleCategories} search={search} setSearch={setSearch} /> 
      <div className={styles.productsPage}>

        {products.filter((product) => product.title.toLowerCase().match(regex) || product.description.toLowerCase().match(regex)).map((product) => {
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
