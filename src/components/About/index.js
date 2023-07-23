import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <div className="about-home-container ">
    <Navbar />
    <div className="container">
      <div className="about-container-light">
        <h1 className="about-heading">How we work</h1>
        <p className="about-para">
          MyTransfers is a young company, created in 2018, however, and due to
          the extensive experience of more than 14 years in the tourism sector
          of its founders, we are sufficiently prepared to become a benchmark
          for quality and service in private transfers with “door-to-door”
          service throughout Europe.
        </p>
        <br />
        <p className="about-para">
          We do not pretend to be the biggest, but we do give the best service.
          We know how important it is that everything goes well when our clients
          are on vacation. That is why we carefully choose one by one our
          suppliers, whom we contractually enforce with a high quality service.
          At MyTransfers we offer private door-to-door transportation services,
          forget the long queues and the endless waiting times, hire our
          services and dedicate yourself just to enjoy your holidays.
          MyTransfers will take you from the Airport, Train Station or from the
          Port to your hotel or destination, without stops, without queues and
          with a personalized and high quality service.
        </p>
        <br />
        <p className="about-para">
          You can choose the type of vehicle that best suits your needs, from a
          private car, a conventional taxi, vans of up to 8 people to even
          minibuses and buses with a capacity of up to 54 seats. Without
          forgetting our VIP transfer services.
        </p>
      </div>
    </div>
  </div>
)

export default About
