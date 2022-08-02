import {ActiveLink} from "./ActiveLink"
import styles from './Navbar.module.css'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

const NavBar = () => {
  return (
    <nav className={styles['menu-container']}>

      {menuItems.map(({href, text}, index) => 
        (
          <ActiveLink key={index} href={href} text={text}/>
        ))}
    </nav>
  )
}

export default NavBar