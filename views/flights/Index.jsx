
 
const React = require("react")
class Index extends React.Component {
  render() {
    const { flights } = this.props
    return(  //add some inline style just for fun
      <div style={{backgroundColor: 'white', color: 'black', fontFamily: 'Arial, sans-serif'}}>
        <h1 style={{fontSize: '24px', fontWeight: 'bold'}}>Welcome to cheap Flights.net</h1>
        <nav>
          <a href="/flights/new" style={{textDecoration: 'none', color: 'blue'}}>Reserve a flight</a>
        </nav>
        <ul>
          {
            flights.map((flight, i) => {
              return (
                <li key={i}>
                  {'  '}
                  <a href={`/flights/${flight._id}`} style={{textDecoration: 'none', color: 'blue'}}>
                   {flight.userName}
                  </a>
                  {' '}
                  <span style={{fontWeight: 'bold'}}>{flight.airline}</span> <br></br>
                  {/* Flight No. {flight.flightNo} - Departure: {flight.departs} */}
                  {flight.depart}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
 
module.exports = Index