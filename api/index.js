import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/data", (req, res) => {
  fetch("https://ldt-tech-test.herokuapp.com/api/startlistentries")
  .then(response => response.json())
  .then(data => res.json(data))
})

app.get("/filter", (req, res) => {
  const q = req.query.q

  fetch("https://ldt-tech-test.herokuapp.com/api/startlistentries")
  .then(response => response.json())
  .then(data => {
    const filteredData = data.filter(booking => booking.organiserTitle === q)
    res.json(filteredData)
  })  
})

const port = 8000

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})