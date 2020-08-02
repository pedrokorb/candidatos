import React from "react"
import { IoLogoFacebook, IoLogoInstagram, IoIosMail } from "react-icons/io"
import Logo from '../../img/logobranco.png'

const socialNetworks = [
  {
    name: 'Facebook',
    icon: 'facebook',
    link: 'https://www.facebook.com/pedro.korb',
    shortLink: 'pedro.korb'
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    link: 'https://www.facebook.com/pedro.korb',
    shortLink: 'pedro.korb'
  },
  {
    name: 'E-mail',
    icon: 'email',
    link: 'pedro.korb@gmail.com',
    shortLink: 'pedro.korb@gmail.com'
  }
]

const getIcon = (icon) => {
  if(icon.includes('facebook')){
    return (<IoLogoFacebook className="w-16 h-16 mx-16 text-white" />)
  } else if(icon.includes('instagram')){
    return (<IoLogoInstagram className="w-16 h-16 mx-16 text-white" />)
  } else {
    return (<IoIosMail className="w-16 h-16 mx-16 text-white" />)
  }
}


const Footer = () => {

  return (
    <div className="bg-black text-white text-center">
      <div className="max-w-screen-lg border-b border-white mx-auto py-16">
        <h4 className="text-4xl">Contato</h4>
        <h5 className="text-2xl my-8">Siga-nos nas redes sociais ou nos mande um e-mail</h5>
        <div className="grid grid-flow-col grid-rows-1 gap-1 justify-center">
          { socialNetworks.map((social) => (
            <a href={social.link} key={social.name}>
              {getIcon(social.icon)}
              <p>{social.shortLink}</p>
            </a>
          ))
          }
        </div>
      </div>
      <div className="py-2 text-white flex justify-center">
        <p className="my-auto mx-2">© {new Date().getFullYear()}, desenvolvido por</p>
        <img src={Logo} alt="Logo"/>
        
      </div>
    </div>
  )
}

export default Footer
