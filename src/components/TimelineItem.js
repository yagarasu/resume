import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import styles from './TimelineItem.module.css'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

const cx = classnames.bind(styles)

const TimelineItem = ({
  title,
  subtitle,
  subtitleLink,
  dateStart,
  dateEnd,
  icon,
  children
}) => {
  const dateFormat = date => typeof date === 'string' ? date : date.format('MMM YYYY')
  const startStr = dateFormat(dateStart)
  const endStr = dateFormat(dateEnd)
  return (
    <div className={cx('TimelineItem')}>
      <h2>{title}</h2>
      <h3>
        {
          subtitleLink
            ? <a href={subtitleLink} target="_blank" rel='noreferrer'>{subtitle} <Icon icon={faExternalLinkAlt} /></a>
            : subtitle
        }
      </h3>
      <h4>{startStr} - {endStr}</h4>
      <div className={cx('icon')}>{icon}</div>
      <div className={cx('content')}>
        {children}
      </div>
    </div>
  )
}

TimelineItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  dateStart: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(moment)
  ]),
  dateEnd: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(moment)
  ]),
  icon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.object,
    PropTypes.node
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.object,
    PropTypes.node
  ]),
}

export default TimelineItem
