// Lecture 29 post data

import { useState } from "react";

const Create3 = () => {
	const [title,setTitle] = useState('');
	const [body,setBody] = useState('');
	const [author,setAuthor] = useState('mario');
	//for extra feature,state for loading blog
	const [isPending, setIsPending] = useState(false)

	const handleSubmit = (e) =>{
			e.preventDefault();
			const blog = {title,body,author};
			//for extra feature
			setIsPending(true)
			// console.log("blog", blog);
			// post data 
	fetch('http://localhost:8000/blogs',{
		method: 'POST',
		headers: {"content-type":"application/json"},
		//convert blog object into JSON string
		body: JSON.stringify(blog)
	})
	.then(()=> { 
		console.log("new blog added")
		//for extra feature, as loading is complete, so set isPending to false
		setIsPending(false)
	})
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
				{/* <button>Add blog</button> */}
				{/* for extra feature */}
				{ !isPending && <button>Add blog</button> }
				{ isPending && <button>disable Add blog...</button> }
			</form>
			{/* to check wehther we can get the input filed value */}
			<p>{title}</p>
			<p>{body}</p>
			<p>{author}</p>
		</div>
	 );
}
 
export default Create3;