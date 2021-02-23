import React from 'react'
import classname from 'classnames/bind'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import styles from './SocialIcons.module.css'

const cx = classname.bind(styles)

const SocialIcons = ({ size = "1x", variant = "day", expanded = false, ...props }) => {
  return (
    <div className={cx('SocialIcons', `variant-${variant}`, { expanded })} {...props}>
      <a href="https://github.com/yagarasu" target="_blank" rel="noreferrer">
        <Icon icon={faGithub} size={size} />{expanded && (<span>Github</span>)}
      </a>
      <a href="https://www.linkedin.com/in/alexyshegmann" target="_blank" rel="noreferrer">
        <Icon icon={faLinkedin} size={size} />{expanded && (<span>LinkedIn</span>)}
      </a>
      <a href="https://twitter.com/yagarasu" target="_blank" rel="noreferrer">
        <Icon icon={faTwitter} size={size} />{expanded && (<span>Twitter</span>)}
      </a>
    </div>
  )
}

export default SocialIcons
