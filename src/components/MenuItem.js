import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import styles from './MenuItem.module.css'

const cx = classnames.bind(styles)

const MenuItem = ({
  component: Component = 'a',
  title,
  description,
  className,
  icon,
  ...props
}) => {
  return (
    <Component className={cx('MenuItem', className)} {...props}>
      <Icon icon={icon} size="2x" className={cx('icon')} />
      <span className={cx('content')}>
        <span className={cx('title')}>{title}</span>
        <span className={cx('description')}>{description}</span>
      </span>
    </Component>
  )
}

MenuItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ])
}

export default MenuItem
