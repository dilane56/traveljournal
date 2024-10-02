
import '../styles/App.css';
import Header from './Header';
import Main from './Main';
import data from '../data/data';


function App() {

const element = data.map((elmt) =>{
  return(<Main   
    key ={elmt.id} 
    item = {elmt}  />)
})

  return (
    <div className="App">
      <Header />
      {element}
    </div>
  );
}

export default App;
