import {useState,useEffect} from 'react';

// const useFetch = () => {
const useFetch = (url) => {
	// const [blogs,setBlogs] = useState(null)  // this state is changed to data below
	const [data, setData] = useState(null)
	const [isPending, setIsPending] = useState(true)
	const [error,setError] = useState(null)

	useEffect(() => {
		setTimeout(()=>{
			// fetch('http://localhost:8000/blogs')
			fetch(url)
				.then (res=> {
					if(!res.ok)
					throw Error("failed to fetch data for that resource")
					return res.json()
				})
				.then((data)=>{
					console.log("data",data)
					setError(null)
					// setBlogs(data) state changed to data
					setData(data)
					setIsPending(false)
				})
				.catch(err => {
					setIsPending(false)
					setError(err.message)
				})
		}, 2000)}
	// ,[]) //changed after hardcoded url is removed
	,[url])
	return {data,isPending,error}
}

export default useFetch