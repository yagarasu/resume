import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import styles from './SkillList.module.css'

const cx = classnames.bind(styles)

const SkillList = ({ items, compact }) => {
  return (
    <ul className={cx('SkillList', { compact: !!compact })}>
      {items.map(({ name, icon, description }) => (
        <li key={name} className={cx('item')}>
          <Icon icon={icon} className={cx('icon')} /> {name}
          {description && (<span className={cx('description')}>{description}</span>)}
        </li>
      ))}
    </ul>
  )
}

SkillList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      icon: PropTypes.object,
      description: PropTypes.string
    })
  )
}

export default SkillList
