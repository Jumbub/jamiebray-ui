import { useState, useEffect } from 'react'
import getWindowSize from '../utils/getWindowSize'

const useWindowSize = () => {
  const [size, setSize] = useState(getWindowSize())

  const onResize = () => setSize(getWindowSize())

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  })

  return size
}

export default useWindowSize
