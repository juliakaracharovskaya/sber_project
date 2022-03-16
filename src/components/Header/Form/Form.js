import { useContext, useState } from "react"
import { TodoListContext } from "../../../contexts/TodoListContext"

const Form = () => {
  const [topic, setTopic] = useState("")
  const [image, setImage] = useState("")
  const [input, setInput] = useState("")
  const [tags, setTags] = useState("")

  const { createTodo } = useContext(TodoListContext)
  
  const changeTopic = (e) => setTopic(e.target.value)
  const changeImage = (e) => setImage(e.target.value)
  const changeHandler = (e) => setInput(e.target.value)
  const changeTags = (e) => setTags(e.target.value)

  const submitHandler = (e) => {
    e.preventDefault()

    const inputTrim = input.trim()
    const topicTrim =topic.trim()
    const imageTrim = image.trim()
    const tagsTrim = tags.trim()
    if (inputTrim && topicTrim && imageTrim && tagsTrim) {
      createTodo(inputTrim, topicTrim, imageTrim, tagsTrim)
      setTopic('')
      setImage('')
      setInput('')
      setTags('')
    } 
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3 d-flex align-items-center " >
      <input
          type="text"
          className="form-control  bg-danger p-2 text-dark bg-opacity-10 m-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Text here topic..."
          value={topic}
          onChange={changeTopic}
        />
      
      <input
          type="text"
          className="form-control  bg-danger p-2 text-dark bg-opacity-10 m-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Link to image..."
          value={image}
          onChange={changeImage}
        />

        <input
          type="text"
          className="form-control  bg-danger p-2 text-dark bg-opacity-10 m-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Text here..."
          value={input}
          onChange={changeHandler}
        />
          <input
          type="text"
          className="form-control bg-danger p-2 text-dark bg-opacity-10 m-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Text here your tag..."
          value={tags}
          onChange={changeTags}
        />
        
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button type="submit" className="btn btn-outline-danger  ">
        Add Post
      </button>
      </div>
    </form>
  )
}

export default Form;
