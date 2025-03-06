import styles from "../styles/ProductFilter.module.css"
function ProductFilter({ categories, visibleCategories,setVisibleCategories }) {
    return(
      <nav className={styles.sideNav}>
        {categories.map((category) => {
          return (
            <div className="cateogory">
              <input
                type="checkbox"
                id={category}
                name={category}
                checked={visibleCategories[category]}
                onChange={(e) => {setVisibleCategories({...visibleCategories, [category]: !visibleCategories[category]})}}
                key={category}
              ></input>
              <label htmlFor={category}>{category}</label>
            </div>
          );
        })}
      </nav>
    );
}

export default ProductFilter