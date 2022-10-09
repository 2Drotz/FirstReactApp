import EmployersListItem from '../emloyers-list-item/emloyers-list-item';
import './emloyers-list.css';

const EmployersList = ({ data }) => {

   const elements = data.map(item => {
      const { id, ...itemProps } = item;
      return (
         <EmployersListItem key={id} {...itemProps} />
      )
   });

   return (
      <ul className="app-list list-group">
         {elements}
      </ul>
   )
}

export default EmployersList;