import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons'

function NavBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(true);
  const hideSidebar = () => setSidebar(false);

  return (
    <div>
      <IconContext.Provider value={{ color: 'white' }}>
        <div
          className="navbar"
          onMouseEnter={showSidebar}
          onMouseLeave={hideSidebar}
        >
          <div className="logo-aurelius">Aurelius</div>
        </div>
        <nav
          className={sidebar ? 'nav-menu active' : 'nav-menu'}
          onMouseEnter={showSidebar}
          onMouseLeave={hideSidebar}
        >
          <ul className="nav-menu-items">
            <li className="sidebar-title">
              <div className="menu-aurelius">Aurelius</div>
            </li>
            {SidebarData.map((item, index) => (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default NavBar