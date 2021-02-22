import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import styles from './Accordion.module.css'

const cx = classnames.bind(styles)

const Accordion = ({
  title,
  children,
  icon,
  ...props
}) => {
  const [open, setOpen] = useState(false)
  const hndClick = e => setOpen(!open)
  return (
    <div {...props}>
      <h2 className={cx('title')} onClick={hndClick}><Icon icon={icon} className={cx('icon')} />{title}</h2>
      <div className={cx('content', { open })}>
        {children}
      </div>
    </div>
  )
}

Accordion.propTypes = {
  title: PropTypes.string
}

export default Accordion
