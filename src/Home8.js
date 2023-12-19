
import {useState,useEffect} from 'react';
import BlogList1 from './BlogList1';
import useFetch from './useFetch';
const Home8 = () => {
	
	
	// const {data,isPending,error} = useFetch('http://localhost:8000/blogs') //either this or following can work
	const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs') //data can be used with name blogs

	
	return ( 
			<div className="home">
				{error && <div>{error}</div>}
			{isPending && <div> Loading... </div> }	
			{/* {data && <BlogList1 blogs={data} title="All Blogs" /> } */}
			{blogs && <BlogList1 blogs={blogs} title="All Blogs" /> }
	
    </div>	
	 );
}

 
export default Home8;