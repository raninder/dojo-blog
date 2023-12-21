import { useParams } from "react-router";

const BlogDetails = () => {
	const {id} = useParams(); //parameter that we want to grab
	return ( 
		<div className="blog-details">
			<h2> Blog Details {id}</h2> {/*to test whether we get that parameter */}
		</div>
	 );
}
 
export default BlogDetails;