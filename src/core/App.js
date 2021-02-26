import { Route, Switch } from 'react-router-dom'
import styles from './App.module.css'
import ResumePage from '../features/resume'
import BlogPage from '../features/blog'
import ProjectsPage from '../features/projects'
import Footer from '../components/Footer'
import Header from '../components/Header'

function App() {
  return (
    <div className={styles.App}>
      <Header />
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
