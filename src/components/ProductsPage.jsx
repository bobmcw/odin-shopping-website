import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/ProductsPage.module.css";
import useProductLoader from "../hooks/useProducts";
import ProductFilter from "./ProductFilter";
import { useOutletContext } from "react-router-dom";
function ProductsPage() {
  const [cart, setCart] = useOutletContext();
  const { error, loading, products, categories } = useProductLoader();
  const [visibleCategories, setVisibleCategories] = useState()
  const [search, setSearch] = useState("");
  const regex = new RegExp(`.*${search.toLowerCase()}.*`);

  useEffect(()=> {
      setVisibleCategories(categories.reduce((acc, category) => ({...acc, [category]: true}),{}))
  },[categories])

  return (
    loading ? <h1 className={styles.communicate}>Loading...</h1> : error ? <h1 className={styles.communicate}>An error has occured</h1> :
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
              price={product.price}
              action={setCart}
              visible={visibleCategories[product.category]}
              cart={cart}
              setCart={setCart}
            />
          );
        })}
      </div>
    </>
  );
}
export default ProductsPage;
