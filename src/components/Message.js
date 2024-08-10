import "./Message.css";
import {useState} from "react"

const Message = ({ showModal, closeModal, data}) => {

    const [title, setTitle] = useState(data.title || '');
    const [note, setNote] = useState(data.note || '');

    const [dataSet, setData] = useState({
        id: data.id,
        title: data.title,
        tag: data.tag,
        note: data.note,
    })


    const handleSave = () => {
        // Save the updated data (you can handle this as needed)
        console.log('Updated Data:', { title, note });
        setData(data => ({
            ...data,
            id: data.id,
            title: title,
            note: note,
        }));
        console.log(dataSet);
        closeModal(); // Close the modal after saving
      };

    const handleEditTitle = () => {
        // setTitle();
    }

    const handleEditNote = () => {
        // setNotes(e.target.value);
    }

    if (!showModal) return null;
 
    return (  

            <div className="modal-overlay" onClick={closeModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <h2 className="message-title">{data.id + " " + title}</h2>
                    <input type="text"
                        value={data.title}
                        onChange={(e) => setTitle(e.target.value)}/>
                    <textarea 
                        value={data.note}
                        onChange={(e) => setNote(e.target.value)}
                    ></textarea>
                    <button onClick={closeModal} className="button">Cancel</button>
                    <button onClick={handleSave} className="button">Confirm</button>
                </div>
            </div>

    );
}
 
export default Message;