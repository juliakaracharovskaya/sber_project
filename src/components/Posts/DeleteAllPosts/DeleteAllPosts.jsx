import { useContext } from "react"
import { PostListContext } from "../../../contexts/PostListContext"



const DeleteAllPosts = () => {
 const {clearAllPost} = useContext(PostListContext)

	const deleteAllHandler = () => clearAllPost()

    return(
        <footer className='d-flex mt-5 justify-content-center' >
             <button onClick={deleteAllHandler} type="button" className="btn btn-danger mx-1">Delete All</button>
        </footer>
    )
}
export default DeleteAllPosts