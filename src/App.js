import './App.css';
import Headerr from './components/Headerr';
import Card from './components/Card';
import Category from './components/Category';
import { useState } from "react";


function App() {
  //const name = "Mark"
  // const client_id = "801979867548-nbt0usbqnh11u0kqbm6detd2vdhh07rd.apps.googleusercontent.com";
  // const client_secret = "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";
  const [list, setList] = useState([]);

  const [filter, setFilter] = useState("");

  return (
    
    <div className="App">
        <Headerr setList={setList} list={list} setFilter={setFilter}/>
        <div className="category">
          <Category list={list} setFilter={setFilter}/>
        </div>
        <Card list={list} filter={filter}/>
    </div>
  );
}

export default App;
