import { useContext } from "react"
import { PostListContext } from "../../../contexts/PostListContext"
import { useNavigate, useParams } from 'react-router-dom'
import Modal from "../../Modal/Modal"
import ModalInput from "../../Modal/ModalInput/ModalInput"
import { motion } from "framer-motion"

const DetailPage = () => {

    const { posts } = useContext(PostListContext)
    const {id} = useParams()
    const navigate = useNavigate()
    const dataForPost = posts.find((post) => post.id === +id)
     const {viewModal} = useContext(PostListContext)
     const {openModal} = useContext(PostListContext)
     const {closeModal} = useContext(PostListContext)
          
      const cardVariants = {
        start: {
          opacity: 0,
          y: 100,
          rotate: 180,
        },
        end: {
          opacity: 1,
          y: 0,
          rotate: 0,
          transition: {
            duration: 2,
            rotate: {
              duration: 2,
            },
          },
        },
      }

        return(
         <>
         <motion.div  variants={cardVariants} initial="start" animate="end" className="card" style={{ width: '18rem' }}>
             <img src={dataForPost.image}  className="card-img-top shadow-lg p-3 mb-5 bg-body rounded" alt='img'/>
               <div className="card-body">
                   <h5 className="card-title">{dataForPost.topic}</h5>
                   <p className="card-text">{dataForPost.input}</p>
                   <p>#{dataForPost.tags} </p>	
                   <button type="button" onClick={() => navigate(-1)} className="btn btn-primary mx-1">Go back</button>
                   <button type="button" onClick={openModal} className="btn btn-success mx-1">Edit</button>		
               </div> 
        </motion.div>

            <Modal
            
            state={viewModal}
            onClose={closeModal}>

                <ModalInput 
                  createSubmit={()=>{}} 
                  {...dataForPost}
                />
              </Modal>
         </>
           )
        }

export default DetailPage