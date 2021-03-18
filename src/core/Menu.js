import { Link } from 'react-router-dom'
import classnames from 'classnames/bind'
import { faCoffee, faFeather, faBrain, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import MenuList from '../components/MenuList'
import MenuItem from '../components/MenuItem'
import styles from './Menu.module.css'

const cx = classnames.bind(styles)

const Menu = ({ className, onClick = () => {} }) => {
  const scrollUpAndClick = e => {
    window.scrollTo(0, 0)
    onClick(e)
  }
  return (
    <MenuList className={cx('Menu', className)}>
      <MenuItem component={Link} to="/" title="Resume" description="Who is Alexys Hegmann? Give it a quick look" icon={faCoffee} onClick={scrollUpAndClick} />
      <MenuItem component={Link} to="projects" title="Projects" description="Pet projects and rough tests" icon={faBrain} onClick={scrollUpAndClick} />
      <MenuItem component={Link} to="blog" title="Blog" description="Some notes and articles related to dev" icon={faFeather} onClick={scrollUpAndClick} />
      <MenuItem component="a" href="#contact" title="Contact" description="Let's work together" icon={faEnvelopeOpenText} onClick={onClick} />
    </MenuList>
  )
}

export default Menu
