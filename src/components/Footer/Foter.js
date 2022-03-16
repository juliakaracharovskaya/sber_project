import { TodoListContext } from "../../contexts/TodoListContext"
import { useContext } from "react"

const Footer = () => {
    const { clearAllTodos} = useContext(TodoListContext)

	const deleteAllHandler = () => clearAllTodos()

    return(
        <footer className='d-flex mt-5 justify-content-center' >
             <button onClick={deleteAllHandler} type="button" className="btn btn-danger mx-1">Delete All</button>
        </footer>
    )
}
export default Footer