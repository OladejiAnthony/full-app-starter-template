import React, { useState } from 'react'
import {Link, NavLink} from "react-router-dom"
import {FaTimes} from "react-icons/fa"
import {HiOutlineMenuAlt3} from "react-icons/hi"
import styles from "./Header.module.scss"

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        Starter<span>Template</span>.
      </h2>
    </Link>
  </div>
)
const activeLink = ({isActive}) => (
  isActive ? `${styles.active}` 
  : ""
  //active link color
)

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  const hideMenu = () => {
    setShowMenu(false);
  }

  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav className={
          showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
        }>
          {/* navMenu btn */}
          <div className={
            showMenu 
            ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}` 
            : `${styles["nav-wrapper"]}`
          }
          onClick={hideMenu}
          >
          </div>
          {/* Sidebar List  */}
          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>
              {logo}
              <FaTimes size={22} color='#fff' onClick={hideMenu} />
            </li>
            <li>
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/home" className={activeLink}>
                Dashboard
              </NavLink>
            </li>
          </ul>

          <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>
              <NavLink to="/login" className={activeLink}>
                Login
              </NavLink>
              <NavLink to="/register" className={activeLink}>
                Register
              </NavLink>
            </span>
            <button className='--btn --btn-primary'>Get Started</button>
          </div>
        </nav>
        <div className={styles["menu-icon"]}>
          <HiOutlineMenuAlt3 
            size={28}
            onClick={toggleMenu}
          />
        </div>
      </div>
    </header>
  )
}

export default Header


