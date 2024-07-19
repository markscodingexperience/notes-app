import './App.css';
import './components/Header';

function App() {
  const name = "Mark"
  // const client_id = "801979867548-nbt0usbqnh11u0kqbm6detd2vdhh07rd.apps.googleusercontent.com";
  // const client_secret = "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";
  
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
  );
}

export default App;
