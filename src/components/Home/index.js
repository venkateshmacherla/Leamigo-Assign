import {useState} from 'react'
import SearchForm from '../SearchForm'
import VehicleList from '../VehicleList'
import Navbar from '../Navbar'
import './index.css'

const Home = () => {
  const [pointA, setPointA] = useState('')
  const [pointB, setPointB] = useState('')
  const [date, setDate] = useState('')
  const [vehicles, setVehicles] = useState([])

  // Function to handle API call and populate vehicle list
  const handleSearch = () => {
    // Perform API call here and update the vehicles state with the response data
    // Dummy API call
    const dummyData = [
      {id: 1, name: 'Vehicle 1', type: 'Sedan'},
      {id: 2, name: 'Vehicle 2', type: 'SUV'},
      {id: 3, name: 'Vehicle 3', type: 'Minivan'},
    ]
    setVehicles(dummyData)
  }

  return (
    <div className="bg-container">
      <Navbar />
      <h1 className="home-heading">Airlines Transfer Booking App</h1>

      <SearchForm
        pointA={pointA}
        setPointA={setPointA}
        pointB={pointB}
        setPointB={setPointB}
        date={date}
        setDate={setDate}
        handleSearch={handleSearch}
      />
      <VehicleList vehicles={vehicles} />
    </div>
  )
}

export default Home
