//Lecture 31 deleting blogs

import { useNavigate, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails2 = () => {
	const {id} = useParams(); 
	// data: blog means blog term can be used instead of data
	const {data:blog,error,isPending} = useFetch('http://localhost:8000/blogs/'+id);
  const navigate = useNavigate();

	const handleDelete = () => {
		fetch('http://localhost:8000/blogs/'+blog.id,{
			method: 'DELETE'
		}).then(()=> navigate('/'))
	}
	return ( 
		<div className="blog-details">
			{isPending && <div>Loading....</div>}
			{error && <div>{error}</div>}
			{blog && (  //() template for multiple elements
				<article>
					<h2>{blog.title}</h2>
					<p>Written by : {blog.author}</p>
					<div>{ blog.body}</div>
					<button onClick = { handleDelete}>Delete blog</button>
				</article>
			)}
		</div>
	 );
}
 
export default BlogDetails2;