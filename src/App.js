import Navbar from './Navbar';
// import Home8 from './Home8';
// import Create from './Create';
// import Create1 from './Create1';
// import Create2 from './Create2';
// import Create3 from './Create3';
import Create4 from './Create4';
//using routes instead of Switch in react-rouer-dom ver6
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BlogDetails1 from './BlogDetails1';
import Home9 from './Home9';


function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
          <Route path="/" element={<Home9 />} />
          <Route path="/create" element={<Create4 />} />
          <Route path="/blogs/:id" element={<BlogDetails1 />} />
            </Routes>
        
        </div>
      </div>
    </Router>
  );
}

export default App;


