import styles from "../styles/ProductFilter.module.css"
function ProductFilter({ categories, visibleCategories,setVisibleCategories }) {
    return(
      <nav className={styles.sideNav}>
        {categories.map((category) => {
          return (
            <div className="cateogory" key={category}>
              <input
                type="checkbox"
                id={category}
                name={category}
                checked={visibleCategories[category] !== undefined ? visibleCategories[category] : true}
                onChange={() => {setVisibleCategories({...visibleCategories, [category]: !visibleCategories[category]})}}
              ></input>
              <label htmlFor={category}>{category}</label>
            </div>
          );
        })}
      </nav>
    );
}

export default ProductFilter