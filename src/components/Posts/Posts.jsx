import DeleteAllPosts from "./DeleteAllPosts/DeleteAllPosts"
import PostInput from "./PostInput/PostInput"
import PostList from "./PostList/PostList"
// import PostFilter from "./PostFilter/PostFilter"

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