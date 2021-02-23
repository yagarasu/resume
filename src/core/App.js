import { Route, Switch } from 'react-router-dom'
import Menu from './Menu'
import styles from './App.module.css'
import logo from '../assets/logo.svg'
import logoWhite from '../assets/logoWhite.svg'
import ResumePage from '../features/resume'
import BlogPage from '../features/blog'
import ProjectsPage from '../features/projects'
import SocialIcons from '../components/SocialIcons'
import Section from '../components/Section'

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
        <div className={styles.footerContent}>
          <div className={styles.third}>
            <Section title="Social Media" className={styles.footerSection}>
              <SocialIcons variant="night" expanded />
            </Section>
          </div>
          <div className={styles.third}>
            <Section title="Contact" className={styles.footerSection}>
              <form>
                <input></input>
              </form>
            </Section>
          </div>
          <div className={styles.third}>
            <img src={logoWhite} className={styles.footerLogo} alt="Alexys Hegmann Web Developer" />
          </div>
          <div className={styles.full}>
            <p>&copy; {(new Date()).getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
