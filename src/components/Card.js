import "./Card.css";

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
 
  getRandomColor(); 

const Card = () => {
    return (  
        <div className="card">
             <div className="card-single">
                <span className="title-card">Title of Card</span>
                <p className="date-card">Date of Card</p>
                <p className="message-card">Lorem ipsum dolor sit amet consectetur adipisiLorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quis ea rerum nemo provident, natus similique, perferendis sequi cum tenetur odio nobis velit pariatur corrupti? Non blanditiis quas alias suscipit.</p>
            </div>
            <div className="card-single">
                <span className="title-card">Title of Card</span>
                <p className="date-card">Date of Card</p>
                <p className="message-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quis ea rerum nemo provident, natus similique, perferendis sequi cum tenetur odio nobis velit pariatur corrupti? Non blanditiis quas alias suscipit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quis ea rerum nemo provident, natus similique, perferendis sequi cum tenetur odio nobis velit pariatur corrupti? Non blanditiis quas alias suscipit.</p>
            </div>
            <div className="card-single">
                <span className="title-card">Title of Card</span>
                <p className="date-card">Date of Card</p>
                <p className="message-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quis ea rerum nemo provident, natus similique, perferendis sequi cum tenetur odio nobis velit pariatur corrupti? Non blanditiis quas alias suscipit.</p>
            </div>
            <div className="card-single">
                <span className="title-card">Title of Card</span>
                <p className="date-card">Date of Card</p>
                <p className="message-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quis ea rerum nemo provident, natus similique, perferendis sequi cum tenetur odio nobis velit pariatur corrupti? Non blanditiis quas alias suscipit.</p>
            </div>
        </div>
    );
}


 
export default Card;