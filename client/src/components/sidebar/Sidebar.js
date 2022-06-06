import "./sidebar.css"
import { useState, useEffect } from 'react'


const Sidebar = ({entries, setEntries}) => {

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

  const filterFunction = () => {
    console.log("I'm only showing Great Run events")
  }

  return (
    <div className="sidebar">
      <div className="filterElements">
        Sidebar
        <div className="filterButton">
          {
            organiserList.map(organiser => {
              return (
                <button onClick={() => {filterFunction()}}>{organiser}</button>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar