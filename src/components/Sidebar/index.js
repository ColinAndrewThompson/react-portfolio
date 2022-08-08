import './index.scss'
import { Link, NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelope,
    faHome,
    faUser,
    faCat,
    faDiagramProject,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <FontAwesomeIcon icon={faCat} className="logo" color="#ffffff" />
            <h1 className="sub-logo"> C</h1>
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} />
            </NavLink>

            <NavLink
                exact="true"
                activeclassname="active"
                to="/about"
                className="about-link"
            >
                <FontAwesomeIcon icon={faUser} />
            </NavLink>

            {/* <NavLink
                exact="true"
                activeclassname="active"
                to="/contact"
                className="contact-link"
            >
                <FontAwesomeIcon icon={faEnvelope} />
            </NavLink> */}

            <NavLink
                exact="true"
                activeclassname="active"
                to="/portfolio"
                className="portfolio-link"
            >
                <FontAwesomeIcon icon={faDiagramProject} />
            </NavLink>
            

        </nav>

        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/colinandrewthompson'>
                    <FontAwesomeIcon icon={faLinkedin} color="#BBB8B2" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href='https://github.com/ColinAndrewThompson'>
                    <FontAwesomeIcon icon={faGithub} color="#BBB8B2" />
                </a>
            </li>
        </ul>
        
    </div>
)

export default Sidebar
