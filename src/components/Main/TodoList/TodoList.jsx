import { useContext } from "react"
import { TodoListContext } from "../../../contexts/TodoListContext"
import TodoItem from "./TodoItem/TodoItem"

const TodoList = () => {

	const {todos} = useContext(TodoListContext)


	return(
		
			<div className="row row-cols-3 mx-5 " >
			 
				{todos.length ? todos.map((todo, i)=> {
						return(
					<TodoItem 
						key={todo.id}
						index={i} 
						id={todo.id} 
						topic={todo.topic}
						image = {todo.image}
						text={todo.text}
						tags={todo.tags}
					/>
						)
					}) :<p>List empty...</p>
				}
			</div>	
	
	   )
	}

export default TodoList