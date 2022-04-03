import { useDispatch } from "react-redux"
import { clearAllPosts } from "../../../redux/actionCreators/postsAC"


const DeleteAllPosts = () => {
 const dispatch = useDispatch()

	const deleteAllHandler = () => {
        dispatch(clearAllPosts())
    }

    return(
        <footer className='d-flex mt-5 justify-content-center' >
             <button onClick={deleteAllHandler} type="button" className="btn btn-danger mx-1">Delete All</button>
        </footer>
    )
}
export default DeleteAllPosts