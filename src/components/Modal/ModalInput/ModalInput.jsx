import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { PostListContext } from "../../../contexts/PostListContext"
import { useSelector } from "react-redux"

function ModalInput({ onSubmit, topic = '', image = '', input = '', tags = '' }) {

  
  const [title, setTitle] = useState(topic)
  const [pic, setPic] = useState(image)
  const [word, setWord] = useState(input)
  const [tag, setTag] = useState(tags)
 
  const posts = useSelector(store => store.posts)
  
  const {id} = useParams()
  const { closeModal} = useContext(PostListContext)

  const indexPost = posts.findIndex((post) => post.id === +id)

            
   posts[indexPost].image = pic
   posts[indexPost].topic = title
   posts[indexPost].input = word
   posts[indexPost].tags = tag 

  const changeTitle = (e) => setTitle(e.target.value)
  const changePic = (e) => setPic(e.target.value)
  const changeWord = (e) => setWord(e.target.value)
  const changeTag = (e) => setTag(e.target.value)

  const createSubmit = (e) => {
    e.preventDefault()

    const wordTrim = word.trim()
    const titleTrim = title.trim()
    const picTrim = pic.trim()
    const tagTrim = tag.trim()
    if (wordTrim && titleTrim && picTrim && tagTrim) {

      setTitle(title)
      setPic(pic)
      setWord(word)
      setTag(tag)
    }

     closeModal()
      };
   
  return (
    <form onSubmit={createSubmit}>
      <div className="mb-3 d-flex align-items-center " >
        <input
          type="text"
          className="form-control  bg-danger p-2 text-dark bg-opacity-10 m-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Text here topic..."
          value={title}
          onChange={changeTitle}
        />
        <input
          type="text"
          className="form-control  bg-danger p-2 text-dark bg-opacity-10 m-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Link to image..."
          value={pic}
          onChange={changePic}
        />
        <input
          type="text"
          className="form-control  bg-danger p-2 text-dark bg-opacity-10 m-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Text here..."
          value={word}
          onChange={changeWord}
        />
        <input
          type="text"
          className="form-control bg-danger p-2 text-dark bg-opacity-10 m-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Text here your tag..."
          value={tag}
          onChange={changeTag}
        />
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="submit" className="btn btn-outline-danger m-1 ">
          Change Post
        </button>
      </div>
    </form>
  )
}

export default ModalInput