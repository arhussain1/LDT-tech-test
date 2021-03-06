import "./table.css"

const Table = ({ entries, filteredEntries}) => {

  let chosenData 

  if (filteredEntries.length === 0) {
    chosenData = entries
  }
  else {
    chosenData = filteredEntries
  }

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th className="nameColumns">First Name</th>
            <th className="nameColumns">Last Name</th>
            <th className="statusColumn">Status</th>
            <th className="eventColumn">Event</th>
            <th className="organiserColumn">Organiser</th>
          </tr>
        </thead>
        <tbody>
          {
            chosenData.map((val, key) => {
              return(
                <tr key={key}>
                  <td>{val.firstName}</td>
                  <td>{val.lastName}</td>
                  <td>{val.status}</td>
                  <td>{val.eventTitle}</td>
                  <td>{val.organiserTitle}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table