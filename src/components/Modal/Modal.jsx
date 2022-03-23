import styles from './modal.module.css'
import ReactDOM from 'react-dom';

const Modal = ({children}) => {

    return ReactDOM.createPortal(  
          (  
          <div className={styles.wrapper}>
             <div className={styles.inner}>
                 {children}
             </div>
         </div>
      ),   document.getElementById('modal-root')
    )
  }

export default Modal
