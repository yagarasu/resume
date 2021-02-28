import React, { useRef } from 'react'
import classnames from 'classnames/bind'
import PropTypes from 'prop-types'
import styles from './Single.module.css'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faTimes as faClose } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'

const cx = classnames.bind(styles)

const Single = ({ id }) => {
  const backdropEl = useRef(null)
  const history = useHistory()
  const hndClose = () => history.goBack()
  const hndBackdropClick = e => {
    if (backdropEl.current && e.target === backdropEl.current) {
      history.goBack()
    }
  }
  return (
    <div className={cx('backdrop')} onClick={hndBackdropClick} ref={backdropEl}>
      <article className={cx('article')}>
        <header>
            <img src={`https://placehold.it/${Math.round(Math.random() * 600)}x${Math.round(Math.random() * 600)}`} className={cx('image')} />
          <h1 className={cx('title')}>Lorem ipsum</h1>
          <h2 className={cx('date')}>Sunday 23 Feb 2021</h2>
        </header>
        <main className={cx('content')}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec tempor leo. In volutpat purus mi, in luctus neque ultricies et. Nullam malesuada metus eu odio blandit, id accumsan urna tincidunt. Sed non maximus enim. Suspendisse facilisis velit sit amet gravida mattis. Etiam euismod ex purus, eu malesuada velit tincidunt vitae. Pellentesque sodales orci id tortor ultrices, efficitur pharetra ipsum convallis. Phasellus pretium porta aliquam. Donec vehicula turpis sit amet arcu dictum varius. Nam risus risus, dapibus vitae facilisis nec, consequat quis orci. Duis interdum eu est sed convallis. Aenean placerat egestas dolor, et pretium felis consequat ut. Nunc efficitur sapien quis vulputate lobortis. Duis mollis fringilla lorem vel tincidunt. Nulla ultricies, metus sit amet auctor pharetra, felis justo condimentum erat, non egestas sem ante a elit. Vestibulum egestas accumsan lacus iaculis elementum.</p>

          <p>Aliquam sit amet lectus lacus. Quisque auctor dignissim ex, eleifend lobortis nisi volutpat sit amet. Cras tempor risus neque, sit amet consequat tellus sagittis non. Suspendisse scelerisque rutrum velit quis porta. Donec ultrices semper egestas. Donec ut magna risus. Ut ut aliquet sem.</p>

          <p>Vivamus bibendum et dolor in sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, lorem quis finibus malesuada, nulla nisi tincidunt erat, non sollicitudin neque mi sit amet lacus. Vivamus neque nulla, tempor scelerisque est vel, posuere condimentum mauris. Ut tempus magna non turpis mollis auctor. Nullam at diam est. Pellentesque lacinia in nunc quis rutrum. Aliquam ac sapien ac mi congue rutrum ut eget mi. Duis ultrices purus eu fringilla faucibus. Vivamus molestie feugiat nisl in tempus. Suspendisse auctor odio faucibus condimentum euismod. Suspendisse feugiat lectus purus, nec tristique purus vehicula at. Duis blandit, mi in vulputate commodo, justo orci dapibus est, non vestibulum ipsum ante quis dolor. Nunc consectetur interdum diam feugiat pretium. Donec iaculis velit vitae porttitor venenatis. Nullam dapibus nunc orci, sed placerat lorem malesuada quis.</p>
        </main>
      </article>
      <button className={cx('close')} onClick={hndClose}><Icon icon={faClose} /></button>
    </div>
  )
}

Single.propTypes = {
  id: PropTypes.number
}

export default Single
