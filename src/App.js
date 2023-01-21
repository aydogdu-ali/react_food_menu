import Menu from "./components/Menu";
import data from "./helper/data"; // veriyi import ettim.
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Yemek Menümüz</h1>
      </div>
      {/*data verisini props olarak Menu Componentine gönderdik.*/}
      <Menu data={data} />
    </div>
  );
}

export default App;
