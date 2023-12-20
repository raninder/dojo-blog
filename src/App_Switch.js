import Navbar from './Navbar';
import Home8 from './Home8';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            {/* show home component on Homepage */}
            <Route path="/"> <Home8/> </Route>
            {/* <Route path="/about"><About/> </Route> */}
          </Switch> 
        </div>
      </div>
    </Router>
  );
}

export default App;


