import { useContext } from "react"
import { TodoListContext } from "../../../../contexts/TodoListContext"
const { Link } = require('react-router-dom')


const TodoItem = ({id, index, topic, image, text, tags}) => {

	const { deleteTodo} = useContext(TodoListContext)
	const deleteHandler = () => deleteTodo(id)


		return (
	  
			<div className="card m-2 bg-danger p-2 text-dark bg-opacity-10  shadow p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>			
				<img src={image}  className="card-img-top shadow-lg p-3 mb-2 bg-body rounded" alt='img'/>
				<div className="card-body">
					<h5 className="card-title m-1">{index + 1}. {topic}</h5>
					<p className="card-text">{text}</p>
					<p ><small className="text-muted">#{tags}</small> </p>			
					<button onClick={deleteHandler} type="button" className="btn btn-danger ">Delete Post</button>	
					<p className="m-1"><Link className="link-danger" to={`/${id}`}>Detail</Link></p>	
				</div>
			</div>
		)
}

export default TodoItem