import styles from "../styles/ProductFilter.module.css"
function ProductFilter({ categories, visibleCategories,setVisibleCategories, search, setSearch }) {
    return(
      <nav className={styles.sideNav}>
        <input type="text" name="search" id="search" placeholder="search" onChange={(e)=> setSearch(e.target.value)} value={search} />
        {categories.map((category) => {
          return (
            <div className={styles.category} key={category}>
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