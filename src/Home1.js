//state hook

import {useState} from 'react';

const Home1 = () => {
	// let name= ' Maria'
	const [name, setName] = useState ('Maria');  //initial value of name that can be changed lateron by using setName function
	const [age, setAge] = useState(25)
	const handleClick = () =>{
		setName("Robin")
		setAge(30);
	 }

	return ( 
		<div className="home">
			<p>{name} is {age} years old. </p>
			<button onClick={handleClick}>Change</button>
		</div>
	 );
}

 
export default Home1;