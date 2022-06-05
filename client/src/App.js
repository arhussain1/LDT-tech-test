import { useEffect } from 'react'


function App() {

  useEffect(() => {
    const fetchBookings = async () => {
      await fetch("http://localhost:8001/data")
      .then(response => response.json())
      .then(data => console.log(data))
      }
    
    fetchBookings();
  }, []);

  return (
    <div className="App">
      Lettuce do this
    </div>
  );
}

export default App;
