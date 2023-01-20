import Menu from "./components/Menu"
import data from "./helper/data"
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Yemek Menümüz</h1>
      </div>
      <Menu data={data} />
    </div>
  );
}

export default App;
