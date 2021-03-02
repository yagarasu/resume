import React, { useRef, useState, useEffect } from 'react'
import classnames from 'classnames/bind'
import PropTypes from 'prop-types'
import styles from './Single.module.css'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faTimes as faClose } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'
import useService from '../../services/useService'

const cx = classnames.bind(styles)

const Single = ({ id }) => {
  const { PostsService } = useService(['PostsService'])
  const backdropEl = useRef(null)
  const history = useHistory()
  const [state, setState] = useState({
    loading: false,
    article: {},
    error: null
  })
  useEffect(() => {
    async function loadArticle() {
      setState({ ...state, loading: true, error: null })
      try {
        const article = await PostsService.single(id)
        setState({
          ...state,
          loading: false,
          error: null,
          article
        })
      } catch (e) {
        setState({ ...state, loading: false, error: e.message })
      }
    }
    loadArticle()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  useEffect(() => {
    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.paddingRight = '15px'
    return () => {
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.paddingRight = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [id])
  const hndClose = () => history.goBack()
  const hndBackdropClick = e => {
    if (backdropEl.current && e.target === backdropEl.current) {
      history.goBack()
    }
  }
  const { title, date, content, image } = state.article
  return (
    <div className={cx('backdrop')} onClick={hndBackdropClick} ref={backdropEl}>
      <article className={cx('article')}>
        <header>
          <img src={image} className={cx('image')} alt={title} />
          <h1 className={cx('title')}>{title}</h1>
          <h2 className={cx('date')}>{date}</h2>
        </header>
        <main className={cx('content')}>
          {ReactHtmlParser(content)}
        </main>
      </article>
      <button className={cx('close')} onClick={hndClose}><Icon icon={faClose} /></button>
    </div>
  )
}

Single.propTypes = {
  id: PropTypes.string,
  article: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string
  })
}

export default Single
