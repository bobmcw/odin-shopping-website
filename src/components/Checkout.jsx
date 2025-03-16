import styles from "../styles/Checkout.module.css";
import CheckoutButton from "./CheckoutButton";
import ProductCard from "./ProductCard";
import { useOutletContext } from "react-router-dom";
import AppleIcon from '@mui/icons-material/Apple';

function Checkout() {
  const [cart, setCart] = useOutletContext();
  if(Array.from(cart).length === 0){
    return(
        <div className={styles.checkout}>
            <h1 style={{margin: 'auto auto'}}>No items added to the cart yet!</h1>
        </div>
    )
  }
  else{

  return (
    <>
      <div className={styles.checkout}>
        <div className={styles.productsList}>
          {Array.from(cart).map((item) => {
            return <>
               <ProductCard name={item[0]} price={item[1].price} imageUrl={item[1].imageUrl}/> 
            </>;
          })}
        </div>
        <div className={styles.summary}>
            <div className={styles.itemList}>
                {Array.from(cart).map((item) => {
                    return(
                        <div className={styles.summaryItem}>
                            <p className={styles.summaryName}>{item[0]} x {item[1].amount} </p>
                            <p className={styles.price}>${item[1].amount * item[1].price}</p>
                        </div>
                    )
                })}
            </div>
        <div className={styles.buttons}>
            <CheckoutButton logo={<AppleIcon style={{color: "white"}} />} fontColor={"#FFFFFF"} text={'Apple Pay'} color={'#000000'} />
        </div>
        </div>
      </div>
    </>
  );
}
}
export default Checkout;
