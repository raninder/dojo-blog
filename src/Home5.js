
import {useState,useEffect} from 'react';
import BlogList1 from './BlogList1';

const Home5 = () => {
	
	const [blogs, setBlogs] = useState(null)

	useEffect(() => {
	fetch(" http://localhost:8000/blogs")
		.then (res=> res.json())
		.then((data)=>{
			console.log("data",data)
			setBlogs(data)
		})
		}, [])
	
	return ( 
			<div className="home">
				
			{blogs && <BlogList1 blogs={blogs} title="All Blogs" /> }
	
    </div>	
	 );
}

 
export default Home5;