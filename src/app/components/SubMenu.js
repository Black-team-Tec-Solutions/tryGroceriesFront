
import {Link} from 'react-router-dom'; 


const SubMenu = ({meals = [0,1,2,3]}) => (
    <ul className="list-group" style={{maxHeight: "90vh", overflow: "scroll"}}>
    {
        meals.map((meal, index_c) => (
            <li key={index_c} className="list-group-item list-group-item-action">
                comida {index_c}
            </li>
        ))
    }       
    </ul>
)
export default SubMenu;