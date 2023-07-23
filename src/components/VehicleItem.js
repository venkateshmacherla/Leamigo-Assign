import './VehicleItem.css'

const VehicleItem = ({vehicle}) => (
  <li className="list-of-vehicles">
    {vehicle.name} - {vehicle.type}
  </li>
)

export default VehicleItem
