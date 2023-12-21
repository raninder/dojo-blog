
import BlogList2 from './BlogList2';
import useFetch from './useFetch';
const Home9 = () => {
	
	const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs') //data can be used with name blogs

	
	return ( 
			<div className="home">
				{error && <div>{error}</div>}
			{isPending && <div> Loading... </div> }	
			
			{blogs && <BlogList2 blogs={blogs} title="All Blogs" /> }
	
    </div>	
	 );
}

 
export default Home9