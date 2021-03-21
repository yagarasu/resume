import { useState, useEffect } from 'react'

const addListener = (mq, cb) => {
  try {
    mq.addEventListener('change', cb);
  } catch (e) {
    try {
      mq.addListener(cb)
    } catch (ee) {
      console.warn('MediaQueryList listeners not supported. Print will always be set to false.')
    }
  }
}

const removeListener = (mq, cb) => {
  try {
    mq.removeEventListener('change', cb);
  } catch (e) {
    try {
      mq.removeListener(cb)
    } catch (ee) {
      // Do nothing
    }
  }
}

const useDetectPrint = () => {
  const [isPrint, setIsPrint] = useState(false)
  useEffect(() => {
    const mediaQuery = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('print');
    const onMediaQueryChange = mq => setIsPrint(!!mq.matches)
    addListener(mediaQuery, onMediaQueryChange)
    
    return () => removeListener(mediaQuery, onMediaQueryChange)
  })

  return isPrint
}

export default useDetectPrint
