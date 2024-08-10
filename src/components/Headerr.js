import "./Header.css";
import Input from "./Input";
import { useState } from "react";

const Headerr = ({setList, list, setFilter}) => {

    const [modal, setModal]= useState(false);

    const showInp = () => {
        setModal(true);
    }

    const closeInput = () => {
        setModal(false);
    }

    function handleFilter(e){
        setFilter(e);
    }

    return ( 
            <>
                <div className="header-grid">
                    <h1 className="header-title">Your Notes</h1>
                    <button className="header-add" onClick={showInp}> + </button> 
                    <Input showInput={modal} closeInput={closeInput} setList={setList}></Input>
                    <select name="" id="" className="header-select" onChange={(e) => handleFilter(e.target.value)}>
                        <option value="">#all</option>
                        {list.map(data => (
                            <option value={data.tag} key={data.id} >{data.tag}</option>
                        ))};
                        
                        
                    </select>
                    
                </div>
            </>
            
          
     );
}
 
export default Headerr;