import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails1 = () => {
	const {id} = useParams(); 
	// data: blog means blog term can be used instead of data
	const {data:blog,error,isPending} = useFetch('http://localhost:8000/blogs/'+id);
	return ( 
		<div className="blog-details">
			{isPending && <div>Loading....</div>}
			{error && <div>{error}</div>}
			{blog && (  //() template for multiple elements
				<article>
					<h2>{blog.title}</h2>
					<p>Written by : {blog.author}</p>
					<div>{ blog.body}</div>
				</article>
			)}
		</div>
	 );
}
 
export default BlogDetails1;