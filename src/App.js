import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

//Componente: es una funcion que comienza con una mayuscula y retorna JSX

function App() {
  return (
    //no se puede retornar 2 elementos en el mismo nivel, por lo que se debe usar fragments <> o divs para anidar los elementos
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a la tienda online de eLiving"/>
    </div>
  );
}
export default App;
