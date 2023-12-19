import Navbar from './Navbar';
import Home8 from './Home8';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Home8 />
      </div>
    </div>
    </Router>
  );
}

export default App;


