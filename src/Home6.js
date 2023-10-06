
import {useState,useEffect} from 'react';
import BlogList1 from './BlogList1';

const Home6 = () => {
	
	const [blogs, setBlogs] = useState(null)
	const [isPending, setIsPending] = useState(true)

	
	useEffect(() => {
		setTimeout(()=>{
	fetch(" http://localhost:8000/blogs")
		.then (res=> res.json())
		.then((data)=>{
			console.log("data",data)
			setBlogs(data)
			setIsPending(false)
		})
		}, 2000)},
		[])

	
	return ( 
			<div className="home">
			{isPending && <div> Loading... </div> }	
			{blogs && <BlogList1 blogs={blogs} title="All Blogs" /> }
	
    </div>	
	 );
}

 
export default Home6;