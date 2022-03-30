
import { useNavigate } from 'react-router-dom'

function Contacts() {
  const navigate = useNavigate()
    return (
     <div className='m-3' style={{ width: '18rem' }}>
       <p>Our contacts 
         <br />8 (999) 999 99 99
         <br />г.Саратов 
         <br />hello@mail.ru
       </p>
       <button type="button" onClick={() => navigate(-1)} className="btn btn-dark mx-1 mb-2">Go back</button> 
       <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT46bsohkpfokoHBCmhSsnlYl7A7Apce7zLc-_8E_on9zXdl4eOGw0gUk_vFUg0XGzdBko&usqp=CAU" 
        className="card-img-top shadow-lg p-3 mb-5 bg-body rounded" 
        alt='img'/>
     </div>

    )
  }
  
  export default Contacts
  