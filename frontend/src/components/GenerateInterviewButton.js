import React from 'react'

const GenerateInterviewButton = ({ onClick }) => {
  return (
    <div className='generate-button-container'>
      <button className='generate-button GIB' onClick={onClick}>
        Generate Interview
      </button>
    </div>
  )
}

export default GenerateInterviewButton