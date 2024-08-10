import './Input.css';
import React from 'react';
import { useState } from 'react';

const Input = ({showInput, closeInput, setList}) => {

    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [note, setNote] = useState("");
    const [nextId, setNextId] = useState(1); // Initialize the ID state

    const handleSubmit = (e) => {
        e.preventDefault();

        //date
        let objectDate = new Date();
        let day = objectDate.getDate();
        let month = objectDate.getMonth();
        let year = objectDate.getFullYear();
        let date = month + "-" + day + "-" + year;
        let incrementId = "1";
        setList(list => [
            ...list,
            {
              id: nextId,
              title: title,
              tag: tag,
              note: note
            }
          ]);

        setNextId(nextId + 1);

        // Clear input fields after submission
        setTitle("");
        setTag("");
        setNote("");
    }


    if (!showInput) return null;

    const modalName = showInput ? "modal showInput" : "";

    return (  
        <>
            <div className={modalName}>
                <div className="modalInput" onClick={e => e.stopPropagation()}>
                    <div className="modalContent">
                        <span className="close" onClick={closeInput}>&times;</span>
                        <form action="" onSubmit={handleSubmit}>
                            <input type="text" className="title" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                            <input type="text" className="tags" id="" placeholder='tags' value={tag} onChange={(e) => setTag(e.target.value)}/>
                            <textarea name="note" className='note' id="" value={note} onChange={(e) => setNote(e.target.value)}></textarea>
                             <button type="submit">Enter</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );


}


 
export default Input;