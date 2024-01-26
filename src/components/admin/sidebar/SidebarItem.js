import React,{useEffect, useState} from 'react'
import {MdKeyboardArrowRight} from "react-icons/md"
import {NavLink} from "react-router-dom"

const activeLink = ({isActive}) => (
    isActive ? "active" : "link"
)
const activeSubLink = ({isActive}) => (
    isActive ? "active" : "link"
)

const SidebarItem = ({item, isOpen, setIsOpen }) => {
  const [expandMenu, setExpandMenu] = useState(false);
  useEffect(() => {
    if(!isOpen) {
        setExpandMenu(false)
    }
  },[isOpen, setExpandMenu])

  const hideSidebar = () => {
    setExpandMenu(false)
    setIsOpen(false)
    //this function closes the sidebar entirely, whenevr we click any of the sidebarItem, 
  }

  if(item.children) { 
    //check if menu item has property of "children": 
     return (
        //Account Component
        <div className={
            expandMenu ? "sidebar-item s-parent open"
                       : "sidebar-item s-parent"
        }>
            <div
              className='sidebar-title'
              onClick={() => setExpandMenu(!expandMenu)}
            >
              <span>
                {item.icon && <div className='icon'>{item.icon}</div>}
                {isOpen && <div>{item.title}</div>}
              </span>
              <MdKeyboardArrowRight 
                size={25}
                className='arrow-icon'
              />
            </div>
            <div className='sidebar-content'>
                {/*Map through the children of the Account Component */}
                {item.children.map((child, index) => {
                    return (
                        <div key={index} className='s-child'>
                            <NavLink to={child.path} className={activeSubLink}>
                                <div 
                                    className='sidebar-item' 
                                    onClick={hideSidebar}
                                >
                                    <div className='sidebar-title'>
                                        <span>
                                            {child.icon && <div className='icon'>{child.icon}</div>}
                                            {isOpen && <div>{child.title}</div>}
                                        </span>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
        </div>
     ) 
   } else {
        return (
            //Dashboard component
            <NavLink to={item.path} className={activeLink}>
                <div 
                    className='sidebar-item  s-parent' 
                    onClick={hideSidebar}
                >
                    <div className='sidebar-title'>
                        <span>
                            {item.icon && <div className='icon'>{item.icon}</div>}
                            {isOpen && <div>{item.title}</div>}
                        </span>
                    </div>
                </div>
            </NavLink>
        )
    }


}

export default SidebarItem
