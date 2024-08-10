import './App.css';
import Headerr from './components/Headerr';
import Card from './components/Card';
import Category from './components/Category';
import { useState } from "react";


function App() {

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
