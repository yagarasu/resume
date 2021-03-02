import React, { useState, useEffect } from 'react'
import classnames from 'classnames/bind'
import styles from './Blog.module.css'
import { Link, Route } from 'react-router-dom'
import { InfiniteScroll } from 'react-simple-infinite-scroll'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import ReactHtmlParser from 'react-html-parser'
import Single from './Single'
import useService from '../../services/useService'

const cx = classnames.bind(styles)

const BlogPage = props => {
  const { PostsService } = useService(['PostsService'])
  const [state, setState] = useState({
    loading: false,
    page: 0,
    articles: [],
    error: null,
    total: null
  })
  const hndLoadMore = async () => {
    setState({ ...state, loading: true, error: null })
    try {
      const { articles, total } = await PostsService.list(state.page + 1)
      setState({
        ...state,
        loading: false,
        error: null,
        page: state.page + 1,
        articles: [...state.articles, ...articles],
        total
      })
    } catch (e) {
      setState({ ...state, loading: false, error: e.message })
    }
  }
  useEffect(() => {
    hndLoadMore()
  }, [])
  return (
    <div className={cx('blog')}>
      <InfiniteScroll
        throttle={1000}
        threshold={300}
        isLoading={state.loading}
        hasMore={state.total === null || state.total > state.articles.length}
        onLoadMore={hndLoadMore}
      >
        {state.articles.map(({ id, title, date, teaser, image }) => (
          <article className={cx('article')} key={id}>
            <header>
              <Link to={`/blog/${id}`}><img src={image} className={cx('image')} alt={title} /></Link>
              <h1 className={cx('title')}><Link to={`/blog/${id}`}>{title}</Link></h1>
              <h2 className={cx('date')}><Link to={`/blog/${id}`}>{date}</Link></h2>
            </header>
            <main className={cx('teaser')}>
              <Link to={`/blog/${id}`}>{ReactHtmlParser(teaser)}</Link>
            </main>
          </article>
        ))}
      </InfiniteScroll>
      {state.loading && (
        <div className={cx('spinner')}><Icon icon={faSpinner} size="3x" spin /></div>
      )}
      <Route path="/blog/:id" exact>
        {({ match }) => match && <Single id={match.params.id} />}
      </Route>
    </div>
  )
}

export default BlogPage
