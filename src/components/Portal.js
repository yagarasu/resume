import { useMemo, useEffect } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

const Portal = ({ children, className }) => {
  const el = useMemo(() => document.createElement("div"), [])
  useEffect(() => {
    const parent = document.body
    el.classList = [className]
    parent.appendChild(el)
    return () => {
      parent.removeChild(el)
    }
  })
  return createPortal(children, el)
}

Portal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
}

export default Portal
