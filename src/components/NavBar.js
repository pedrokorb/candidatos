import React, { useEffect, useRef, useState } from "react"
import { TiThMenu } from 'react-icons/ti'
import { RiCloseLine } from 'react-icons/ri'
import Logo from '../img/logoJose.svg'

const links = [
  {
    name: "Sobre",
    value: "#sobre"
  },
  {
    name: "Propostas",
    value: "#propostas"
  },
  {
    name: "Contato", 
    value: "#contato"
  },
]

const NavBar = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [navbarHeight, setNavbarHeight] = useState(0)
  const [scrolled, changeState] = useState(false)
  const navbar = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (document.documentElement.scrollTop > 50 && !scrolled) {
        changeState(true)
      } else if (document.documentElement.scrollTop <= 50 && scrolled)
        changeState(false)
    }

    window.addEventListener("scroll", onScroll)

    setNavbarHeight(navbar.current.getBoundingClientRect().height)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [scrolled])

  return (
    <div className="z-20 fixed w-full">
      <div
        className={`duration-300 transition-all flex justify-between items-center my-auto nav ${
          scrolled ? "p-4 bg-white shadow-lg" : "p-5 bg-transparent"
          }`}
        ref={navbar}
      >
        <img 
          src={Logo}
          alt={`Logotipo Candidato ${navbarHeight}`} 
          className={`duration-300 transition-all ${scrolled ? "w-16" : "w-24"}`} 
        />

        <button
          className={`duration-300 transition-all ${scrolled ? "text-black" : "text-white"} outline-0 lg:hidden`}
          // style={{
          //   transform: "translateY(-50%)",
          //   top: "50%",
          //   left: "10px",
          // }}
          onClick={() => {
            setSidebarOpen(!sidebarOpen)
          }}
        >
          {sidebarOpen ? (<RiCloseLine className="w-8 h-8" />) : (<TiThMenu className="w-8 h-8" />)}
        </button>
      
        <div className="hidden lg:block">
          <div className={`nav-links flex ${scrolled ? "text-black" : "text-white"}`}>
            {links.map((link) => (
              <p className="px-2">{link.name}</p>
            ))}
          </div>
        </div>
      </div>

        {sidebarOpen && (
          <div>
            <div className={`lg:hidden duration-300 transition-all bg-white ${scrolled ? "bg-opacity-100" : "bg-opacity-75"} m-4 h-full shadow-md rounded-lg flex flex-col justify-center`}>
              <div className="text-center">
                <div className={`nav-links`}>
                  {links.map((link) => (
                    <p key={link.name} className="py-2">{link.name}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      
    </div>
  )
}

export default NavBar
