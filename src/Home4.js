
import {useState,useEffect} from 'react';
import BlogList from './BlogList';

const Home4 = () => {
	
	const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

	const [name,setName] = useState('Mario')

	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog)=> blog.id !== id);
		setBlogs(newBlogs)
	}

	useEffect(() => {
		console.log("useEffect run");
		//  console.log(blogs);
		}, [name])
	// useEffect(()=> console.log(blogs))
	return ( 
			<div className="home">
				
			<BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete}/>
			<p>{name}</p>
			<button onClick={()=>setName('Luigi')}>Change Name</button>
    </div>	
	 );
}

 
export default Home4;