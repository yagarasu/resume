import React, { useState, useEffect } from 'react'
import classnames from 'classnames/bind'
import useService from '../../services/useService'
import styles from './Projects.module.css'

const cx = classnames.bind(styles)

const ProjectsPage = props => {
  const { ProjectsService } = useService(['ProjectsService'])
  const [state, setState] = useState({
    loading: false,
    projects: [],
    error: null,
    total: null
  })
  const loadProjects = async () => {
    setState({ ...state, loading: true, error: null })
    try {
      const { projects, total } = await ProjectsService.list(state.page + 1)
      setState({
        ...state,
        loading: false,
        error: null,
        projects,
        total
      })
    } catch (e) {
      setState({ ...state, loading: false, error: e.message })
    }
  }
  useEffect(() => {
    loadProjects()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className={cx('projects')}>
      {state.projects.map(({ id, title, description, url, image }) => (
        <article key={id}>
          <img src={image} className={cx('image')} alt={title} />
          <h1><a href={url}>{title}</a></h1>
          <div>{description}</div>
        </article>
      ))}
    </div>
  )
}

export default ProjectsPage
