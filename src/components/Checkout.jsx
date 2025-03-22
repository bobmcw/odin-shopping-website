import styles from "../styles/Checkout.module.css";
import CheckoutButton from "./CheckoutButton";
import ProductCard from "./ProductCard";
import { useOutletContext } from "react-router-dom";
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DeleteIcon from '@mui/icons-material/Delete';

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
            return (
            <div className={styles.cards} key={item[0]} >
               <ProductCard name={item[0]} price={item[1].price} imageUrl={item[1].imageUrl} interactive={false}/> 
               <div className={styles.controls}>
                   <button onClick={() => {
                    const newCart = new Map(cart);
                    newCart.delete(item[0]);
                    setCart(newCart);
                    }}>
                       <DeleteIcon className={styles.delete} />
                   </button>
               </div>
            </div>
            );
          })}
        </div>
        <div className={styles.summary}>
            <div className={styles.itemList}>
                {Array.from(cart).map((item) => {
                    return(
                        <div className={styles.summaryItem} key={item[0] + 'amount'}>
                            <p className={styles.summaryName}>{item[0]} x {item[1].amount} </p>
                            <p className={styles.price}>${item[1].amount * item[1].price}</p>
                        </div>
                    )
                })}
                <div className={styles.total}>
                    <p>Total: </p>
                    <p className={styles.ammount}>${Array.from(cart).reduce((acc, a) => acc += a[1].price * a[1].amount,0)}</p>
                </div>
            </div>
        <div className={styles.buttons}>
            <CheckoutButton  logo={<GoogleIcon />} text={'Google Pay'} color={'#FFFFFF'}/>
            <CheckoutButton logo={<AppleIcon style={{color: "white"}} />} fontColor={"#FFFFFF"} text={'Apple Pay'} color={'#000000'} />
            <CheckoutButton logo={<CreditCardIcon />} text={'Credit card'}/>
        </div>
        </div>
      </div>
    </>
  );
}
}
export default Checkout;
