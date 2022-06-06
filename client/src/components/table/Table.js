import "./table.css"

const Table = ({entries}) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Status</th>
            <th>Event</th>
            <th>Organiser</th>
          </tr>
        </thead>
        <tbody>
          {
            entries.map((val, key) => {
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