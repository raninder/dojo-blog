import { Link } from 'react-router-dom'
// type sfc and press enter key, simple react snippet will generate functional component template
//sfc is stateless functional component

const  Navbar = () => {
	return ( 
		// type nav.navbar and press enter
		<nav className="navbar">
		<h1> The Dojo Blog</h1>
		<div className="links">
			
			{/* add inline style using {{}} one {}for dynamic variables and other {} as object 
			style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>*/}
				{/* we are replacing href with Link for react-router-dom to intercept requests in lec 22*/}
			{/* <a href="/">Home</a>
			<a href="/create">New Blog</a> */} 
			<Link to="/">Home</Link>
			<Link to="/create">New Blog</Link>
		</div>
		</nav>
	 );
}
 
export default Navbar;