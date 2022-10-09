import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../emloyers-list/emloyers-list';
import EmployersAddForm from '../emloyers-add-form/emloyers-add-form';
import './app.css';





function App() {

   const data = [
      { name: "dima", salary: 800, increase: false, id: 1 },
      { name: "vova", salary: 1000, increase: true, id: 2 },
      { name: "olga", salary: 5400, increase: false, id: 3 }
   ];

   return (
      <div className="app">
         <AppInfo />

         <div className="search-panel">
            <SearchPanel />
            <AppFilter />
         </div>
         <EmployersList data={data} />
         <EmployersAddForm />
      </div>
   )
}

export default App;