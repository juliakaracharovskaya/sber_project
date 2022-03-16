import { useContext } from "react"
import { TodoListContext } from "../../../../contexts/TodoListContext"


const TodoItem = ({id, index, topic, image, text, tags}) => {

	const { deleteTodo} = useContext(TodoListContext)

	const deleteHandler = () => deleteTodo(id)

		return (
		<li className="list-group-item">
			<span>
				{index + 1}. {topic}
				<div><img src={image}  class="card-img-top shadow-lg p-3 mb-5 bg-body rounded" alt='img'/></div>
				<div>{text}</div>
				<div>#{tags}</div>
			</span>
			<div>
				<button onClick={deleteHandler} type="button" className="btn btn-danger">Delete Post</button>
			</div>
		</li>
	)
}

export default TodoItem