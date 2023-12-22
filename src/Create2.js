// Lecture 28  submit events
import { useState } from "react";

const Create2 = () => {
	const [title,setTitle] = useState('');
	const [body,setBody] = useState('');
	const [author,setAuthor] = useState('mario');
	const handleSubmit = (e) =>{
		//to prevent the default action of page refresh when form submitted
			e.preventDefault();
			const blog = {title,body,author};
			console.log("blog", blog);
	}
	return ( 
		<div className="create">
			<h2> Add Blog</h2>
			<form onSubmit = {handleSubmit}>
				<label>Blog title</label>
				<input 
				type="text"
				required
				value = {title}
				onChange = {(e)=> setTitle(e.target.value)}
				/>
				<label>Blog Body</label>
				<textarea required
				value = {body}
				onChange = {(e)=> setBody(e.target.value)}
				></textarea>
				<label> Blog Author</label>
				<select
				value = {author}
				onChange = {(e)=> setAuthor(e.target.value)}
				>
					<option value="mario">Mario</option>
					<option value="yoshi">Yoshi</option>
				</select> 
				<button>Add blog</button>
			</form>
			{/* to check wehther we can get the input filed value */}
			<p>{title}</p>
			<p>{body}</p>
			<p>{author}</p>
		</div>
	 );
}
 
export default Create2;