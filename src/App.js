

import Navbar from './Navbar';
// import Home from './Home';
// import Home1 from './Home1';
// import Home2 from './Home2';
// import Home3 from './Home3';
// import Home4 from './Home4';
import Home5 from './Home5';

function App() {
  //dynamic values in templates
  // const title= "Welcome to new blog";
  // const likes = 50;
  // const link = "https://google.com";
  return (
    <div className="App">
      <Navbar />
      {/* <div className="content">
        <h1>App component</h1>
        <h2>{ title }</h2>
        <p>liked { likes } times</p>
        <p>{ 1 }</p>
        <p>{ "Hello world" }</p> */}
        {/* output an array as a string, cant render bopolen and objects */}
        {/* <p>{ [1,2,3,4,5] }</p> 
        <p> { Math.random()*10 }</p>   convert to a string  */}
        {/* <a href= { link } > Google site</a>
      </div> */}

      <div className="content">
        {/* <Home />
        <Home1 /> */}
        {/* <Home2 /> */}
        {/* <Home3 /> */}
        {/* <Home4 /> */}
        <Home5 />
      </div>
    </div>
  );
}

export default App;
