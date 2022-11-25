import React,{useState} from "react";
import List from "./card.jsx"


//create your first component
const Home = () => {
	const [tasks, setTasks]= useState([
		
	])
	const [newTask, setNewTask]=useState("")
	function addTask(e){
		if(e.code=="Enter" && newTask!=""){
			setTasks([...tasks, newTask])
			setNewTask("")
		}
	}
	
	function removeTask (index){
		let NewTasks = [...tasks]
		NewTasks.splice(index, 1)
		setTasks(NewTasks)
	}
	return (
		
		<div className="container-fluid d-flex justify-content-center" >
			<h1>ToDos
			</h1>
	<ul className="blurred-box" id="card">
	<li className="login-box d-flex justify-content-between align-items-center">
		<input className="user-password" type="text" onKeyDown={e=>addTask(e)} onChange={e=>setNewTask(e.target.value)} value={newTask} name="task" id="task" />
	</li>
		{tasks.map((task, index)=>(
  <li key={index} className="login-box d-flex justify-content-between align-items-center" id="listItem">
    {task}
    <span onClick={removeTask} className="badge rounded-pill" id="lax">X</span>
  </li>
		))}
		<li className="list-group-item text-center d-flex  justify-content-center align-items-center" id="items"><small>{tasks.length} items.</small></li>
</ul>
	
  
    </div>
	
	
	);
	
};

export default Home;
