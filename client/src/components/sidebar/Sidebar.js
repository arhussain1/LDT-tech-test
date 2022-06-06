import "./sidebar.css"
import { useState, useEffect } from 'react'


const Sidebar = ({entries, setEntries, setFilteredEntries}) => {

  // lets find out the names of our organisers from the entries data
  const [organiserList, setOrganiserList] = useState([])

  useEffect(() => {
    const identifyOrganisers = () => {
      let list = []
      entries.forEach((booking) => {
        if (list.indexOf(booking.organiserTitle) === -1) {
          list.push(booking.organiserTitle)
        }
      })
      setOrganiserList(list)
    }

    identifyOrganisers();
  }, [entries]);

  const filterFunction = async(query) => {
    await fetch(`http://localhost:8000/filter?q=${query.organiser}`)
    .then(response => response.json())
    .then(data => setFilteredEntries(data))
  }


  return (
    <div className="sidebar">
      <div className="filterElements">
        Sidebar
        <div className="filterButton">
          {
            organiserList.map((organiser, index) => {
              return (
                <button key={index} onClick={() => {filterFunction({organiser})}}>{organiser}</button>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar