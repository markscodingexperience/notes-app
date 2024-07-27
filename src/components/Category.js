import "./Category.css";

const Category = () => {
    return ( 
        <>
            <button type="button" className="category-button">#all</button>
            <button type="button" className="category-button">#personal</button>
            <button type="button" className="category-button">#groceries</button>
            <button type="button" className="category-button">#work</button>
            <button type="button" className="category-button">#school</button>
        </>
    );
}
 
export default Category;