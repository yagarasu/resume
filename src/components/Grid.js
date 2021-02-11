import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import styles from './Grid.module.css'

const cx = classnames.bind(styles)

const Grid = ({ children, ...props }) => {
  return (
    <div className={cx('Grid')} {...props}>
      {children}
    </div>
  )
}

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.object,
    PropTypes.node
  ])
}

export const Row = ({ children, ...props }) => {
  return (
    <div className={cx('Row')}>
      {children}
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.object,
    PropTypes.node
  ])
}

export const Cell = ({ children, cols, ...props }) => {
  const colsClass = `col-${cols}`
  return (
    <div className={cx('Cell', colsClass)}>
      {children}
    </div>
  )
}

Cell.propTypes = {
  cols: PropTypes.oneOf([1,2,3,4,5,6,7,8,9,10,11,12]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.object,
    PropTypes.node
  ])
}

export default Grid
