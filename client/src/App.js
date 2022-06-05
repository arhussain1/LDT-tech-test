import { useState, useEffect } from 'react'


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

  console.log(entries)

  return (
    <div className="App">
      Lettuce do this
    </div>
  );
}

export default App;
