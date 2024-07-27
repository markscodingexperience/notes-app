import './Header.css';

const Header = () => {
    return (
        <>
            <div className="header-grid">
                <h1 className="header-title">Your Notes</h1>
                <button className="header-add"> + </button>
                <select name="" id="" className="header-select">
                    <option value="#all">#all</option>
                    <option value="#personal">#personal</option>
                    <option value="#work">#groceries</option>
                    <option value="#school">#work</option>
                </select>
                
            </div>
        </>
        
      );
}
 

export default Header;