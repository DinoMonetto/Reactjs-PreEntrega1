import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';


function App() {
  return (
    <>
      <div className="card">
        <NavBar/>
        <ItemListContainer greeting="Bienvenidos"/>
      </div>
    </>
  )
}

export default App
