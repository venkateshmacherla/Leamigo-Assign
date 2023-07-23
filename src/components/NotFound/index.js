import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <div className="not-found-home-container">
    <Navbar />
    <div className="not-found-container-light">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="not-found-image"
      />
      <h1 className="not-found-heading-light">Lost Your Way?</h1>
      <p className="not-found-para-light">We cannot seem to find the page</p>
    </div>
  </div>
)

export default NotFound
