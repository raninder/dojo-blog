
// type sfc and press enter key, simple react snippet will generate functional component template
//sfc is stateless funational component
const  Navbar = () => {
	return ( 
		// type nav.navbar and press enter
		<nav className="navbar">
		<h1> The Dojo Blog</h1>
		<div className="links">
			<a href="/">Home</a>
			{/* add inline style using {{}} one {}for dynamic variables and other {} as object 
			style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>*/}
			<a href="/create">New Blog</a>
		</div>
		</nav>
	 );
}
 
export default Navbar;