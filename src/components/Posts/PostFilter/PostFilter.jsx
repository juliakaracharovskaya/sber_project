import {  useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PostListContext } from "../../../contexts/PostListContext"

let isMount = false

const PostFilter = () => {
   
    const [searchInput, setSearchInput] = useState('')
    const { posts } = useContext(PostListContext)
   
  

    useEffect(() => {    
      if (isMount) {
         const filter= {
          search: searchInput,
         } 
         const searchRegExp = new RegExp(filter.search, 'i')
         const dataForSearch = posts.filter((post)=> searchRegExp.test(post.topic))
         console.log(dataForSearch)
         

        } else {
         isMount = true    
          }
        }
      , [searchInput])
       
    
      


    const changeHandler = (e) => {
        setSearchInput(e.target.value)
      }
   
    return(
   <form className="d-flex flex-column align-items-center">
      <div className="mb-3">
        <input
          type="text"
          name="name"
          placeholder="Name..."
          className="form-control"
          id="exampleInputEmail1"
          onChange={changeHandler}
          value={searchInput}
        />
      </div>
    </form>
    )
}

export default PostFilter