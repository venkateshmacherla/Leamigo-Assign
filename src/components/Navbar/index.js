import {Link} from 'react-router-dom'

import './index.css'

const Navbar = () => (
  <>
    <div className="nav-bar-container">
      <img
        src="https://leamigo.com/web/assets/img/logo.png"
        alt="website logo"
        className="website-logo "
      />
      <ul className="middle-items">
        <li className="list-item ">
          <Link className="item-underline" to="/">
            Home
          </Link>
        </li>
        <li className="list-item ">
          <Link className="item-underline" to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  </>
)

export default Navbar
