import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Category from './components/Category';

function App() {
  const name = "Mark"
  // const client_id = "801979867548-nbt0usbqnh11u0kqbm6detd2vdhh07rd.apps.googleusercontent.com";
  // const client_secret = "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";
  
  return (
    <div className="App">
        <Header />
        <div className="category">
          <Category />
        </div>
        <Card />
    </div>
  );
}

export default App;
