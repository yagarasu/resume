import { Link } from 'react-router-dom'
import { faCoffee, faFeather, faBrain } from '@fortawesome/free-solid-svg-icons'
import MenuList from '../components/MenuList'
import MenuItem from '../components/MenuItem'
import styles from './Menu.module.css'


function App() {
  return (
    <MenuList className={styles.Menu}>
      <MenuItem component={Link} to="/" title="Resume" description="Who is Alexys Hegmann? Give it a quick look" icon={faCoffee} />
      <MenuItem component={Link} to="blog" title="Blog" description="Some notes and articles related to dev" icon={faFeather} />
      <MenuItem component={Link} to="projects" title="Projects" description="Pet projects and rough tests" icon={faBrain} />
    </MenuList>
  )
}

export default App
