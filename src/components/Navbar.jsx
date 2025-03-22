import styles from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <div className={styles.links}>
                <Link to="/">Main page</Link>
                <Link to="/products">Products</Link>
            </div>
            <div className={styles.icon}><Link to="/checkout"><ShoppingCartIcon sx={{color: 'black'}} /></Link></div>
        </nav>
    );
}

export default Navbar;