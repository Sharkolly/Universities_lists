import React from 'react'

const loading = () => {
  const styling = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }
  return (
    <div style={styling} >
      <h2>Loading Application.....</h2>
    </div>
  )
}

export default loading;