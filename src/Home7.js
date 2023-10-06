
import {useState,useEffect} from 'react';
import BlogList1 from './BlogList1';

const Home7 = () => {
	
	const [blogs, setBlogs] = useState(null)
	const [isPending, setIsPending] = useState(true)
	const [error,setError] = useState(null)
	
	useEffect(() => {
		setTimeout(()=>{
			fetch('http://localhost:8000/blogs')
				.then (res=> {
					if(!res.ok)
					throw Error("failed to fetch data for that resource")
					return res.json()
				})
				.then((data)=>{
					console.log("data",data)
					setError(null)
					setBlogs(data)
					setIsPending(false)
				})
				.catch(err => {
					setIsPending(false)
					setError(err.message)
				})
		}, 2000)}
	,[])

	
	return ( 
			<div className="home">
				{error && <div>{error}</div>}
			{isPending && <div> Loading... </div> }	
			{blogs && <BlogList1 blogs={blogs} title="All Blogs" /> }
	
    </div>	
	 );
}

 
export default Home7;