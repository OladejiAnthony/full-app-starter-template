import React,{useState} from 'react'
import "./Sidebar.scss"
import { HiMenuAlt3 } from 'react-icons/hi'
import { FaLink } from 'react-icons/fa'
import menu from "../../../data/sidebar"
import SidebarItem from './SidebarItem'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    return (
      setIsOpen(!isOpen)
    )
  }
  const closeSidebar = () => {
    return (
      setIsOpen(false)
    )
  }
  const openSidebar = () => {
    return (
      setIsOpen(true)
    )
  }

  const navigate = useNavigate();
  const goHome = () => {
    navigate("/admin/home"); //navigate back to the admin home page
    console.log("go home")
  }

  return (
    <div className='layout'>
      {/* Sidebar Menu Overlay */}
      <div className={
        isOpen ? "sidebar-overlay show-overlay" 
               : "sidebar-overlay"
        }
        onClick={closeSidebar}
      ></div>
      {/* Sidebar OnHover Effect */}
      <div className='sidebar'
        style={{width: isOpen ? "230px" : "60px"}}
        onMouseEnter={openSidebar}
        onMouseLeave={closeSidebar}
      >
        <div className='top_section'>
          <div 
            className='logo' 
            style={{display : isOpen ? "block" : "none"}}
          >
            <FaLink onClick={goHome} size={30} style={{cursor: "pointer"}}  />
          </div>
          <div 
            className='bars'
            style={{marginLeft: isOpen ? "135px" : "0px"}}
          >
            <HiMenuAlt3 onClick={toggle} />
          </div>
        </div>

        {/*Men Item */}
        {menu.map((item, index) => {
            return (
              <SidebarItem 
                key={index}
                item={item}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            )
        })}
      </div>   

    </div>
  )
}

export default Sidebar
