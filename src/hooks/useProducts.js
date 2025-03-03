import { useEffect, useState } from "react"

const useProductLoader = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
          .then((response) => {
            if(response.status >= 400){
                throw new Error("error fetching data");
            }
            return response.json();
          })
          .then((response)=> setProducts(response))
          .catch((error) => setError(error))
          .finally(() => setLoading(false))
      }, []);
      useEffect(() => {
        //extract unique cateogies from all products
        setCategories([...new Set(products.map((product) => product.category))]);
      }, [products])
      return { loading, error, products, categories };
}
export default useProductLoader;