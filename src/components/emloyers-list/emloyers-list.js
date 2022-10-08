import EmployersListItem from '../emloyers-list-item/emloyers-list-item';
import './emloyers-list.css';

const EmployersList = ({ data }) => {

   const elements = data.map(item => {
      return (
         <EmployersListItem {...item} />
      )
   });

   return (
      <ul className="app-list list-group">
         {elements}
      </ul>
   )
}

export default EmployersList;