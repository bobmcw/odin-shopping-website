import styles from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <div className={styles.links}>
                <Link to="/">Main page</Link>
                <Link to="/products">Products</Link>
            </div>
        </nav>
    );
}

export default Navbar;