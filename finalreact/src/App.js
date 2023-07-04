import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import ItemList from '../src/components/ItemList/ItemList';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemList greeting="Loremipsus"/>
    </div>
  );
}

export default App;
