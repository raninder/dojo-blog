
import {useState} from 'react';
import BlogList from './BlogList';

const Home2 = () => {
	
	const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])
	return ( 
			<div className="home">
				{/* following part now moved to BlogList component */}
      {/* {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))} */}
			{/* we can pass a string too in addition to js data with props e.g. title here */}
			<BlogList blogs={blogs} title="All Blogs"/>
			<BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario Blogs"/>	
    </div>	
	 );
}

 
export default Home2;