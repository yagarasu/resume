import React from 'react'
import classnames from 'classnames/bind'
import PropTypes from 'prop-types'
import styles from './Timeline.module.css'

const cx = classnames.bind(styles)

const Timeline = ({ children }) => {
  return (
    <div className={cx('Timeline')}>
      {children}
    </div>
  )
}

Timeline.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
}

export default Timeline
