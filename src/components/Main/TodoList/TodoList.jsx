import { useContext } from "react"
import { TodoListContext } from "../../../contexts/TodoListContext"
import TodoItem from "./TodoItem/TodoItem"

const TodoList = () => {

	const {todos} = useContext(TodoListContext)


	return(
		<div >
			 <ul className="list-group">
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
				</ul>
		</div>
	   )
	}

export default TodoList