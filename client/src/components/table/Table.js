import "./table.css"

const Table = () => {
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
      </table>
    </div>
  )
}

export default Table