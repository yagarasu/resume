import React, { useState } from 'react'
import Menu from '../core/Menu'
import styles from './Header.module.css'
import logo from '../assets/logo.svg'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes as faClose } from '@fortawesome/free-solid-svg-icons'
import Portal from './Portal'

const Header = props => {
  const [open, setOpen] = useState(false)
  return (
    <header className={styles.header}>
      <div className={styles.logoArea}>
        <img src={logo} alt="Alexys Hegmann Web Developer" />
        <div className={styles.title}>
          <h1>Alexys Hegmann</h1>
          <h2>Web Developer</h2>
        </div>
      </div>
      <Menu className={styles.menu} />
      <button className={styles['mobileMenu-button']} onClick={() => setOpen(!open)} >
        <Icon icon={open ? faClose : faBars} />
      </button>
      {open && (
        <Portal className={styles['mobileMenu-portal']}>
          <Menu className={styles['mobileMenu-menu']} onClick={() => setOpen(false)} />
        </Portal>
      )}
    </header>
  )
}

export default Header
