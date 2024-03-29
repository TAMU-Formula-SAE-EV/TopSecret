import Logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Linktree from '../../assets/linktree.png';
import './footer.css';

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-left-container">
                <img src={Logo} alt="Logo" className="footer-logo-image" />
                <h1 className="copyright">© 2024 TAMU FSAE EV</h1>
            </div>
            <div className="footer-right-container">
                <div className="socials-container">
                    <a rel="noopener noreferrer" href='https://www.instagram.com/tamuformulaelectric/' target='_blank'>
                        <FontAwesomeIcon icon={faInstagram} className='icon'/>
                    </a>
                    <a rel="noopener noreferrer" href='https://www.tiktok.com/@tamuformulae' target='_blank'>
                        <FontAwesomeIcon icon={faTiktok} />
                    </a>
                    <a rel="noopener noreferrer" href='https://linktr.ee/tamuformulaelectric' target="_blank">
                        <img src={Linktree} alt="Linktree" className="linktree-icon"/>
                    </a>
                    <a rel="noopener noreferrer" href='https://www.youtube.com/@tamuformulaelectric/videos' target='_blank'>
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a rel="noopener noreferrer" href='https://www.facebook.com/tamu.formula.sae/' target='_blank'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a rel="noopener noreferrer" className='no-margin' href='https://www.linkedin.com/company/texas-a-m-fsae-electric-racing/' target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
                <h1 className="contact"><a href="mailto:tamuformulaelectric@gmail.com" target='_blank'>Contact</a></h1>
            </div>
        </footer>
    );
}
