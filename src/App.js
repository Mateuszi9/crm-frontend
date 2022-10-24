
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard.page';
import { Ticket } from './pages/ticket/Ticket.page';
import { Entry } from './pages/entry/Entry.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import { TicketLists } from './pages/ticket-list/TicketList.page';
import {Registration} from './pages/registration/Registration.page';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Entry />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<DefaultLayout><Dashboard/></DefaultLayout>} />
          <Route path="/tickets" element={<DefaultLayout><TicketLists/></DefaultLayout>} />
          <Route path="/add" element={<DefaultLayout><AddTicket/></DefaultLayout>} />
          <Route path='/ticket' element={<DefaultLayout><Ticket/></DefaultLayout>} />

        </Routes>
      </Router>



    </div>
  );
}

export default App;
