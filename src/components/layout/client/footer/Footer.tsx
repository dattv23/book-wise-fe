import React from 'react'
import ContactInfo from './contact-info'
import SocialIcons from './social-icons'
import LinksSection from './links-section'
import Newsletter from './newsletter'
import PaymentIcons from './payment-icons'
import Copyright from './copyright'

const Footer = () => {
  return (
    <footer className='footer'>
      <ContactInfo />
      <LinksSection />
      <SocialIcons />
      <Newsletter />
      <PaymentIcons />
      <Copyright />
    </footer>
  )
}

export default Footer
