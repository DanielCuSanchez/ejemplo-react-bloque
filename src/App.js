import logo from './logo.svg';
import './App.css';
import { Card } from './componetes/Card'

function App() {
  const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className="App">
      {
        arreglo.map((elemento) => <Card numero1={elemento} />)
      }
    </div>
  );
}

export default App;
