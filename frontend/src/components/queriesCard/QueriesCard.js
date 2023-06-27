import React from 'react'

const QueriesCard = ({name, message,email}) => {
  return (
    <div className="w-1/3"> 
      <h1 className="text-2xl">
        {name}
      </h1>
      {message}
      {email}
    </div>
  )
}

export default QueriesCard
