import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import styles from './ConferenceList.module.css'

const ConferenceList = ({
  items,
  ...props
}) => {
  return (
    <ul className={styles.ConferenceList} {...props}>
      {items.map(({ name, link, year }) => (
        <li key={`${name}${year}`}>{name} ({year}){link && (<a href={link} target="_blank" rel='noreferrer' className={styles.link}><Icon icon={faExternalLinkAlt} /></a>)}</li>
      ))}
    </ul>
  )
}

ConferenceList.propTypes = {
  items: PropTypes.array
}

export default ConferenceList
