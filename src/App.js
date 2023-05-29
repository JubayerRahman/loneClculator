import './App.css';
import Calculator from './Components/Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='homeInputSection'>
        {/* <h1>Loan Canculator app</h1> */}
        <Calculator/>
        </div>
      </header>
    </div>
  );
}

export default App;
