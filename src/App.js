import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import Dashboard from './Dashboard';
import Router from './Component/Config/router';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div> 
          <BrowserRouter>
          <Router/>
          </BrowserRouter>
          {/* <Dashboard/> */}
        </div>

      </div>
    </div>
  );
}

export default App;
