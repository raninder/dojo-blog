import Navbar from './Navbar';
import Home8 from './Home8';
import Create from './Create';
//using routes instead of Switch in react-rouer-dom ver6
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
          <Route path="/" element={<Home8 />} />
          <Route path="/create" element={<Create />} />
            </Routes>
        
        </div>
      </div>
    </Router>
  );
}

export default App;


