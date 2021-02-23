import { Route, Switch } from 'react-router-dom'
import Menu from './Menu'
import styles from './App.module.css'
import logo from '../assets/logo.svg'
import ResumePage from '../features/resume'
import BlogPage from '../features/blog'
import ProjectsPage from '../features/projects'
import Footer from '../components/Footer'

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <img src={logo} alt="Alexys Hegmann Web Developer" />
        <div className={styles.title}>
          <h1>Alexys Hegmann</h1>
          <h2>Web Developer</h2>
        </div>
        <Menu />
      </header>
      <main className={styles.content}>
        <Switch>
          <Route path="/" exact>
            <ResumePage />
          </Route>
          <Route path="/blog" exact>
            <BlogPage />
          </Route>
          <Route path="/projects" exact>
            <ProjectsPage />
          </Route>
        </Switch>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default App
