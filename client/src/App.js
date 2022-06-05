import { useState, useEffect } from 'react'
import Topbar from './components/topbar/Topbar';


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
      {
        entries.map(booking => {
          return <p>{booking.firstName}</p>
        })
      }
    </div>
  );
}

export default App;
