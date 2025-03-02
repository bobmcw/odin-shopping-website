import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
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
    <div className="productsPage">
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
  );
}
export default ProductsPage;
