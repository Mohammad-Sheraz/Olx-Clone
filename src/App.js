import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Config/router';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </div>

      </div>
    </div>
  );
}

export default App;
