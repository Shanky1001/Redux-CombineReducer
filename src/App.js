
import './App.css';
import '@shopify/polaris/build/esm/styles.css';
import Main from './Main';

function App() {

  return (
    <div className="App">
      <h1 style={{fontSize:'2rem',textAlign:'center',padding:'1rem'}}> Combine Reducer Task </h1>
      <Main />
    </div>
  );
}

export default App;
