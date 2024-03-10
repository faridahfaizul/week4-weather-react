import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello world !
        </p>        
        <Weather city="London"/>
        <a
          className="App-link"
          href="https://faridahfaizul.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          faidah faizul
        </a>
      </header>
    </div>
  );
}

export default App;
