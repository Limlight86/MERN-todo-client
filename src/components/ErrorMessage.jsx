import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const ErrorMessage = () => {
  const { errorMessage, setErrorMessage } = useContext(AppContext)

  return(
  <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {errorMessage}
        <button 
          type="button" 
          className="close" 
          data-dismiss="alert" 
          aria-label="Close"
          onClick={()=>setErrorMessage("")}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div> 
  )
}

export default ErrorMessage

