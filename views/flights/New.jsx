const React = require("react")
 
class New extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: 'white', color: 'black', fontFamily: 'Arial, sans-serif'}}>
        <h1 style={{fontSize: '24px', fontWeight: 'bold'}}>Reserved your Flight Here</h1>
 
        <form action="/flights" method="POST">
        User Name: <input type="text" name="userName" /> <br />
          Airline: <input type="text" name="airline" /> <br />
          Flight No.: <input type="text" name="flightNo" /> <br />
          Departure: <input type="datetime-local" name="departs" /> <br />
 
          <input type="submit" value="Create" /><br />
        </form>
        <nav>
          <a href="/flights" style={{textDecoration: 'none', color: 'blue'}}>Back</a>
        </nav>
      </div>
    )
  }
}
 
module.exports = New