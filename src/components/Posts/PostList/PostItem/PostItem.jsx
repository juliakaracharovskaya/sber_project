import { useDispatch } from 'react-redux'
import { deletePost } from '../../../../redux/actionCreators/postsAC'
const { Link } = require('react-router-dom')


const PostItem = ({id, index, topic, image, input, tags}) => {

	const dispatch = useDispatch()
	const deleteHandler = () => {
		dispatch(deletePost(id))
	}

		return (
	  
			<div className="card m-2 bg-danger p-2 text-dark bg-opacity-10  shadow p-3 mb-3 bg-body rounded" style={{ width: '18rem' }}>			
				<img src={image}  className="card-img-top shadow-lg p-3 mb-2 bg-body rounded" alt='img'/>
				<div className="card-body">
					<h5 className="card-title m-1">{index + 1}. {topic}</h5>
					<p className="card-text">{input}</p>
					<p ><small className="text-muted">#{tags}</small> </p>			
					<button onClick={deleteHandler} type="button" className="btn btn-danger ">Delete Post</button>	
					<p className="m-1"><Link className="link-danger" to={`/${id}`}>Detail</Link></p>	
				</div>
			</div>
		)
}

export default PostItem