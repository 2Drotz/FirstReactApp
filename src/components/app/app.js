import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../emloyers-list/emloyers-list';
import EmployersAddForm from '../emloyers-add-form/emloyers-add-form';
import './app.css';





function App() {

   const data = [
      { name: "dima", salary: 800, increase: false },
      { name: "vova", salary: 1000, increase: true },
      { name: "olga", salary: 5400, increase: false }
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