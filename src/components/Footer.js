import React from 'react'
import styles from './Footer.module.css'
import logoWhite from '../assets/logoWhite.svg'
import SocialIcons from '../components/SocialIcons'
import Section from '../components/Section'
import ContactForm from '../components/ContactForm'

const Footer = props => {
  return (
    <div className={styles.footerContent}>
      <div className={styles.third}>
        <Section title="Social Media" className={styles.footerSection}>
          <SocialIcons variant="night" expanded />
        </Section>
      </div>
      <div className={styles.third}>
        <Section title="Contact" className={styles.footerSection}>
          <ContactForm />
        </Section>
      </div>
      <div className={styles.third}>
        <img src={logoWhite} className={styles.footerLogo} alt="Alexys Hegmann Web Developer" />
      </div>
      <div className={styles.full}>
        <p>&copy; {(new Date()).getFullYear()} All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
