import React from 'react'
import classnames from 'classnames/bind'
import styles from './Blog.module.css'
import { Link, Route } from 'react-router-dom'
import Single from './Single'

const cx = classnames.bind(styles)

const BlogPage = props => {
  return (
    <div className={cx('blog')}>
      {[1,2,3,4,5,6,7,8,9].map(id => (
        <article className={cx('article')} key={id}>
          <header>
            <Link to={`/blog/${id}`}>
              <img src={`https://placehold.it/${Math.round(Math.random() * 600)}x${Math.round(Math.random() * 600)}`} className={cx('image')} />
            </Link>
            <h1 className={cx('title')}><Link to={`/blog/${id}`}>Lorem ipsum</Link></h1>
            <h2 className={cx('date')}><Link to={`/blog/${id}`}>Sunday 23 Feb 2021</Link></h2>
          </header>
          <main>
            <Link to={`/blog/${id}`}>Curabitur nec hendrerit ante, ut egestas elit. Quisque ultricies vestibulum consequat. Ut accumsan elementum ipsum, ac aliquam lacus ultricies non. In congue pharetra imperdiet. Phasellus faucibus ut.</Link>
          </main>
        </article>
      ))}
      <Route path="/blog/:id" exact>
        {({ match }) => match && <Single id={match.params.id} />}
      </Route>
    </div>
  )
}

export default BlogPage
