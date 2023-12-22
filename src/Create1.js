import { useState } from "react";

const Create1 = () => {
	const [title,setTitle] = useState();
	return ( 
		<div className="create">
			<h2> Add Blog</h2>
			<form>
				<label>Blog title</label>
				<input 
				type="text"
				required
				value = {title}
				onChange = {(e)=> setTitle(e.target.value)}
				></input>
				<label>Blog Body</label>
				<textarea required></textarea>
				<label> Blog Author</label>
				<select>
					<option value="mario">Mario</option>
					<option value="yoshi">Yoshi</option>
				</select> 
				<button>Add blog</button>
			</form>
		</div>
	 );
}
 
export default Create1;