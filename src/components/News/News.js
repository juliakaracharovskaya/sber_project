
import { useNavigate } from 'react-router-dom'

function News() {

  const navigate = useNavigate()

  return (
  <div className='m-3 ' style={{ width: '15rem' }}>
  <p> Our news </p>
  <button type="button" onClick={() => navigate(-1)} className="btn btn-dark mx-1 mb-2">Go back</button>
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT63IL4LppaC2I7S6U7LT16Euio9qhKUeMvWA&usqp=CAU"  
    className="card-img-top shadow-lg p-3 mb-5 bg-body rounded"
    alt='img'/>
  	 <div >
       <img 
		src="https://www.iconwallstickers.co.uk/media/catalog/product/cache/5/image/650x/040ec09b1e35df139433887a97daa66f/W/S/WS-45762.jpg" 
		className="card-img-top shadow-lg p-3  bg-body rounded " 
		alt='img'/> 
    <div className='m-3 '> Soon... a trip to Cornwall, the most beautiful place in England</div>
    </div>
    </div>
   
  )
}

export default News
