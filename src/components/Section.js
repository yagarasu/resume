import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import classnames from 'classnames/bind'
import styles from './Section.module.css'

const cx =classnames.bind(styles)

const Section = ({ title, children, icon, className }) => {
  return (
    <section className={cx('Section', className)}>
      {title && <h1>{icon && (<Icon icon={icon} size="1x" className={cx('icon')} />)}{title}</h1>}
      {children}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.object,
    PropTypes.node
  ])
}

export default Section
