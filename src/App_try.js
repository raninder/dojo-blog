function App() {
  // dynamic values in templates
  const title= "Welcome to new blog";
  const likes = 50;
  const link = "https://google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>App component</h1>
        <h2>{ title }</h2>
        <p>liked { likes } times</p>
        <p>{ 1 }</p>
        <p>{ "Hello world" }</p>
        {/* output an array as a string, cant render bopolen and objects */}
        <p>{ [1,2,3,4,5] }</p> 
        <p> { Math.random()*10 }</p>   convert to a string 
        <a href= { link } > Google site</a>
      </div>
		</div>	
	)
	}
export default App;