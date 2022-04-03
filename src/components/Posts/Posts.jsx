import DeleteAllPosts from "./DeleteAllPosts/DeleteAllPosts"
import PostInput from "./PostInput/PostInput"
import PostList from "./PostList/PostList"


const Posts = () => {

	

	return (
	<>
	<PostInput />
	<hr />

	<PostList />
	<DeleteAllPosts />
	</>
	)
}

export default Posts