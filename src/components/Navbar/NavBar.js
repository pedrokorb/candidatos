import React, { useEffect, useRef, useState } from "react"
import { Link } from 'gatsby'

import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import Logo from '../../img/logoJose.svg'

const links = [
  {
    name: "Sobre",
    value: "/about"
  },
  {
    name: "Propostas",
    value: "/propostas"
  },
  {
    name: "Projetos",
    value: "/projetos"
  },
  {
    name: "Trajetória",
    value: "/trajetoria"
  },
  {
    name: "Fotos",
    value: "/fotos"
  }
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
    <div 
      className={`z-50 fixed w-full duration-300 transition-all nav ${scrolled ? "p-4 bg-white shadow-lg" : "p-5 bg-transparent"}`}
    >
      <div
        className={`max-w-screen-lg mx-auto flex justify-between items-center my-auto `}
        ref={navbar}
      >
        <Link to="/">
          <img 
            src={Logo}
            alt={`Logotipo Candidato ${navbarHeight}`} 
            className={`duration-300 transition-all ${scrolled ? "w-16" : "w-24"}`} 
          />
        </Link>

        <button
          className={`duration-300 transition-all ${scrolled ? "text-black" : "text-white"} outline-0 lg:hidden`}
          onClick={() => {
            setSidebarOpen(!sidebarOpen)
          }}
        >
          {sidebarOpen ? (<FaAngleUp className="w-8 h-8" />) : (<FaAngleDown className="w-8 h-8" />)}
        </button>
      
        <div className="hidden lg:block">
          <div className={`nav-links flex ${scrolled ? "text-black" : "text-white"}`}>
            {links.map((link, index) => (
              <Link key={index} to={link.value}>
                <p className="px-2">{link.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

        {sidebarOpen && (
          <div>
            <div 
            className={`lg:hidden duration-300 transition-all ${scrolled ? "bg-opacity-100" : "bg-white bg-opacity-75 shadow-md rounded-lg"} m-4 h-full flex flex-col justify-center`}
            >
              <div className="text-center">
                <div className={`nav-links`}>
                  {links.map((link, index) => (
                    <Link key={index} to={link.value}>
                      <p className="py-2">{link.name}</p>
                    </Link>
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
