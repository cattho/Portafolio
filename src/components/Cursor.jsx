import React from 'react'
import useScript from '../hooks/useScript'

const Cursor = (url) => {
    useScript(url)
  return (
    <div>
        <canvas id='canvas' />
    </div>
  )
}

export default Cursor