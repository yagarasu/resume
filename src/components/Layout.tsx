import { useState, type FC, type ReactNode } from 'react';
import logoImg from '../assets/logo.svg';
import whiteLogo from '../assets/logoWhite.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBrain, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import styles from './Layout.module.scss';
import Modal from './Modal';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const [contactOpen, setContactOpen] = useState(false);
  const hndContactOpen = () => setContactOpen(true);
  const hndContactClose = () => setContactOpen(false);
  return (
    <>
      <main className={styles.Wrapper}>
        <header className={styles.Header}>
          <div className={styles.Logo}>
            <img src={logoImg} />
            <div>
              <h1>Alexys Hegmann</h1>
              <h2>Senior Software Engineer</h2>
            </div>
          </div>
          {/* <div className={styles.Menu}>
            <Link to="/" className={styles.MenuItem}>
              <div>
                <FontAwesomeIcon icon={faCoffee} />
              </div>
              <div>
                <h2>Resume</h2>
                <h3>Who is Alexys Hegmann?</h3>
              </div>
            </Link>
            <Link to="/projects" className={styles.MenuItem}>
              <div>
                <FontAwesomeIcon icon={faBrain} />
              </div>
              <div>
                <h2>Projects</h2>
                <h3>Pet projects and rough tests</h3>
              </div>
            </Link>
            <button className={styles.MenuItem} onClick={hndContactOpen}> 
              <div>
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
              <div>
                <h2>Contact</h2>
                <h3>Let's work together</h3>
              </div>
            </button>
          </div> */}
        </header>
        <div className={styles.Main}>
          {children}
        </div>
        <footer className={styles.Footer}>
          <section>
            <h3>Social Media</h3>
            <div className={styles.SocialMedia}>
              {/* <a href="https://github.com/yagarasu" target="_blank" rel="noreferer">
                <FontAwesomeIcon icon={faGithub} />
              </a> */}
              <a href="https://www.linkedin.com/in/alexyshegmann" target="_blank" rel="noreferer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </section>
          <section>
            <img src={whiteLogo} className={styles.FooterLogo} />
          </section>
        </footer>
      </main>
      {contactOpen && (
        <Modal onClose={hndContactClose}>
          <div className={styles.ModalContent}>
            <h2><FontAwesomeIcon icon={faPaperPlane} /> Contact</h2>
            <div>
              <p>Let's work together. Hit me on Linkedin!</p>
              <a href="https://www.linkedin.com/in/alexyshegmann" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="5x" />
              </a>
            </div>
            <div className={styles.ModalActions}>
              <button className={styles.ModalClose} onClick={hndContactClose}>Close</button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Layout;