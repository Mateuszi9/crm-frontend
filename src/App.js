import './App.css';
//import { DefaultLayout } from './layout/DefaultLayout';
// import { Dashboard } from './pages/dashboard/Dashboard.page';
//import { Ticket } from './pages/ticket/Ticket.page';
// import { Entry } from './pages/entry/Entry.page';
//import { AddTicket } from './pages/new-ticket/AddTicket.page';
//import { TicketLists } from './pages/ticket-list/TicketList.page';
import {Registration} from './pages/registration/Registration.page';


function App() {
  return (
    <div className="App">
      {/*<Entry />*/}
      <Registration/>
      {/*<DefaultLayout>*/}
        {/*<Dashboard/>*/}
        {/*<AddTicket/>*/}
        {/*<TicketLists/>*/}
        {/*<Ticket/>*/}
       
      {/*</DefaultLayout>*/}
    </div>
  );
}

export default App;
