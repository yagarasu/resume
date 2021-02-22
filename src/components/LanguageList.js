import React from 'react'
import PropTypes from 'prop-types'
import Flag from 'react-country-flag'
import styles from './LanguageList.module.css'

const LanguageList = ({
  items,
  ...props
}) => {
  return (
    <ul className={styles.LanguageList} {...props}>
      {items.map(({ name, level, countryCode }) => (
        <li key={name}>
          <span className={styles.language}>{countryCode && <Flag countryCode={countryCode} title={name} className={styles.icon} />}{name}</span>
          <span className={styles.level}>{level}</span>
        </li>
      ))}
    </ul>
  )
}

LanguageList.propTypes = {
  items: PropTypes.array
}

export default LanguageList
