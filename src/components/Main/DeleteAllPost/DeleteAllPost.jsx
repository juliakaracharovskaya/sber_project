import { useContext } from "react"
import { TodoListContext } from "../../../contexts/TodoListContext"


const DeleteAllPost = () => {
 const {clearAllPost} = useContext(TodoListContext)

	const deleteAllHandler = () => clearAllPost()

    return(
        <footer className='d-flex mt-5 justify-content-center' >
             <button onClick={deleteAllHandler} type="button" className="btn btn-danger mx-1">Delete All</button>
        </footer>
    )
}
export default DeleteAllPost