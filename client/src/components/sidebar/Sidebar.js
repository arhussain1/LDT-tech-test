import "./sidebar.css"

const Sidebar = ({entries, setEntries}) => {

  const filterFunction = () => {
    console.log("I'm only showing Great Run events")
  }

  return (
    <div className="sidebar">
      <div className="filterElements">
        Sidebar
        <button onClick={() => {filterFunction()}}>Great Run</button>
      </div>
    </div>
  )
}

export default Sidebar