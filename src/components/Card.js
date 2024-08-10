import "./Card.css";
import Message from "./Message";
import Input from "./Input";
import { useState } from "react";

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 3; i++) {
        color += letters[Math.floor(Math.random() * 8)];
        color += letters[Math.floor(Math.random() * 8)];
    }
    return color; 
}

  const items = document.querySelectorAll('.card-single');
  items.forEach(item => {
    item.style.backgroundColor = getRandomColor();
  });
  
 

const Card = ({list, filter}) => {
  
  getRandomColor();
  const [showModal, setShowModal] = useState(false);
  // const [id, setId] = useState(0);

  const [data, setData] = useState({
    id: "",
    title: "",
    tag: "",
    note: ""
  });
  
  const editHandle = (data) => {
    const { id, title, tag, note } = data;
    setShowModal(true); // Show the modal when an item is clicked

    setData(state => ({
      ...state,
      id:id,
      title: title,
      tag: tag,
      note: note,
    }))
  };

  const closeModal = () => setShowModal(false);
  if(filter === "") {

    return (  
      <div className="card">
        {list.map(data => (
          <div className="card-single" key={data.id} data-id={data.id} onClick={() => editHandle(data)}>
            <span className="title-card">{data.title}</span>
            <p className="date-card">{data.tag}</p>
            <p className="message-card">{data.note}</p>
          </div>
        ))};
        <Message showModal={showModal} closeModal={closeModal} data={data}/>
      </div>
    );
  }else {
    const newList = list.filter((list) => list.tag === filter);
    return (  
      <div className="card">
        {newList.map(data => (
          <div className="card-single" key={data.id} data-id={data.id} onClick={() => editHandle(data)}>
            <span className="title-card">{data.title}</span>
            <p className="date-card">{data.tag}</p>
            <p className="message-card">{data.note}</p>
          </div>
        ))};
      </div>
  );
  }

   
}


 
export default Card;