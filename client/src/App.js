import { useState, useEffect } from 'react'
import "./app.css"
import Topbar from './components/topbar/Topbar';
import Sidebar from "./components/sidebar/Sidebar";
import Table from './components/table/Table';


function App() {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    const addBookings = (data) => {
      setEntries(data)
    }  

    const fetchBookings = async () => {
      await fetch("http://localhost:8000/data")
      .then(response => response.json())
      .then(data => addBookings(data))
      }
    
    fetchBookings();
  }, []);

  return (
    <div>
      <Topbar/>
      <div className="container">
        <Sidebar 
            entries={entries}
            setEntries={setEntries}
        />
        <Table/>
      </div>
    </div>
  );
}

export default App;
