import "./revenue.css"

const Revenue = ({ filteredEntries }) => {

let revenue = 0

  const calculateRevenue = () => {
    if (filteredEntries.length > 0) {
      filteredEntries.forEach(booking => {
        revenue += booking.ticketPrice.value
      })
    }
    else {
      revenue = 0
    }
  }

  return (
    <div className="revenue">
      <button onClick={calculateRevenue()}>Calculate Revenue</button>
      <div>
      £ {revenue}
      </div>
    </div>
  )
}

export default Revenue