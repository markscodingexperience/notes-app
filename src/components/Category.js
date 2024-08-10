import "./Category.css";

const Category = ({list, setFilter}) => {

    function handleAll(){
        setFilter("");
    }


    function handleFilter(e){
        setFilter(e);
    }
    return ( 
        <>
            <button type="button" onClick={handleAll} className="category-button">#all</button>
            {list.map(data => (
                <button type="button" onClick={(e) => handleFilter(e.target.value)} key={data.id} value={data.tag} className="category-button">#{data.tag}</button>
            ))}
        </>
    );
}
 
export default Category;