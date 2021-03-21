import React from 'react'
import PropTypes from 'prop-types'
import useCollapse from 'react-collapsed'
import styles from './ViewMore.module.css'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import useDetectPrint from '../hooks/useDetectPrint'

const ViewMore = ({
  children
}) => {
  const isPrint = useDetectPrint()
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  const icon = isExpanded ? faMinusSquare : faPlusSquare
  const showString = isExpanded ? 'less' : 'more'
  if (isPrint) {
    return children
  }
  return (
    <>
      <div  {...getCollapseProps()}>
        {children}
      </div>
      <button className={styles.button} {...getToggleProps()}><Icon icon={icon} className={styles.icon} />Show {showString}</button>
    </>
  )
}

ViewMore.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.object,
    PropTypes.node
  ]),
}

export default ViewMore
