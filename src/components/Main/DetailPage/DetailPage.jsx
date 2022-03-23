import { useContext } from "react"
import { TodoListContext } from "../../../contexts/TodoListContext"
import { useNavigate, useParams } from 'react-router-dom'
import Modal from "../../Modal/Modal"


const editHandler = () =>
{
console.log('edit')
}
const DetailPage = () => {

    const { todos } = useContext(TodoListContext)
    const {id} = useParams()
    const navigate = useNavigate()
    const dataForPost = todos.find((post) => post.id === +id)
    

        return(
         <>
         <div className="card" style={{ width: '18rem' }}>
             <img src={dataForPost.image}  className="card-img-top shadow-lg p-3 mb-5 bg-body rounded" alt='img'/>
               <div className="card-body">
                   <h5 className="card-title">{dataForPost.topic}</h5>
                   <p className="card-text">{dataForPost.text}</p>
                   <p>#{dataForPost.tags} </p>	
                   <button type="button" onClick={() => navigate(-1)} className="btn btn-primary mx-1">Go back</button>
                   <button type="button" onClick={editHandler} className="btn btn-success mx-1">Edit</button>		
               </div> 
        </div>

            {/* <Modal> */}
            {/* <form onSubmit={submitHandler}>
      <div className="mb-3 d-flex align-items-center " >
      <input
          type="text"
          name="name"
          className="form-control  bg-danger p-2 text-dark bg-opacity-10 m-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Text here topic..."
          value={topic}
          onChange={changeTopic}
        />      
      <input
          type="text"
          name="pic"
          className="form-control  bg-danger p-2 text-dark bg-opacity-10 m-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Link to image..."
          value={image}
          onChange={changeImage}
        />
        <input
          type="text"
          name="text"
          className="form-control  bg-danger p-2 text-dark bg-opacity-10 m-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Text here..."
          value={input}
          onChange={changeHandler}
        />
          <input
          type="text"
          name="tag"
          className="form-control bg-danger p-2 text-dark bg-opacity-10 m-1"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Text here your tag..."
          value={tags}
          onChange={changeTags}
        />        
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <button type="submit" className="btn btn-outline-danger  ">
        Add Post
      </button>
      </div>
    </form> */}

            {/* </Modal> */}
         </>
        )
}
export default DetailPage