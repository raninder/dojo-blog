//event handling

const Home = () => {
	 const handleClick = () =>{
		//  console.log("Hello, Ninjas");
		 alert('Hello')
	 }
	 
	 const handleClickAgain = (name) => alert(name)
	return ( 
		<div className="home">
			<h2>Homepage</h2>
			<button onClick={handleClick}>click</button>
			<button onClick = {()=> console.log('hi')}>Click me</button>
			<button onClick = {()=> handleClickAgain('Maria')}> click me again</button>
		</div>
	 );
}
// Passing event object example
// const Home = () => {
// 	const handleClick = (e) =>{
// 	console.log("Hello, Ninjas",e);
		
// 	}
	
// 	const handleClickAgain = (name,e) => console.log(name,e.target)
//  return ( 
// 	 <div className="home">
// 		 <h2>Homepage</h2>
// 		 <button onClick={handleClick}>click</button>
// 		 <button onClick = {()=> console.log('hi')}>Click me</button>
// 		 <button onClick = {(e)=> handleClickAgain('Maria',e)}> click me again</button>
// 	 </div>
// 	);
// }
 
export default Home;