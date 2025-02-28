import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button className="px-6 py-3 text-white bg-terciario rounded-lg hover:bg-blue-600">
        ¡Hola, Tailwind!
      </button>
    </div>
      </header>
    </div>
  );
}

export default App;
