import React, { createContext } from 'react'
import PropTypes from 'prop-types'

export const ServiceContext = createContext(null)

const ServiceProvider = ({ children, container }) => {
  return (
    <ServiceContext.Provider value={container}>
      {children}
    </ServiceContext.Provider>
  )
}

ServiceProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
}

export default ServiceProvider

