import VehicleItem from '../VehicleItem'
import './index.css'

const VehicleList = ({vehicles}) => (
  <div>
    <h2 className="heading">List of Available Vehicles</h2>
    <ul>
      {vehicles.map(vehicle => (
        <VehicleItem key={vehicle.id} vehicle={vehicle} />
      ))}
    </ul>
  </div>
)

export default VehicleList
