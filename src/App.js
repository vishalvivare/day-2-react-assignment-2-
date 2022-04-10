import logo from './logo.svg';
import './App.css';

function App() {
  let services = ["Services", "Projects", "About"]
  return (
    <div className="App">
      <div>
        <h1 className= "logo">Logobakery</h1>
      </div>
      <div className="options">
        {services.map((e) => {
          return <Headers services = {e}/>
        })}
      </div>
      <div>
        <button className="button">Contact</button>
      </div>
    </div>
  );
}
function Headers(props){
      return <p>{props.services}</p>
}

export default App;
