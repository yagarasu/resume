import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import styles from './MenuList.module.css'

const cx = classnames.bind(styles)

const MenuList = ({
  component: Component = 'div',
  children,
  className
}) => {
  return (
    <Component className={cx('MenuList', className)}>
      {children}
    </Component>
  )
}

MenuList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ])
}

export default MenuList
