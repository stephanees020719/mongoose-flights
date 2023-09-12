
const React = require('react')
 
class Show extends React.Component {
  render () {
    const { userName, airline, flightNo, departs } = this.props.flight
 
    return (
      <div style={{backgroundColor: 'white', color: 'black', fontFamily: 'Arial, sans-serif'}}>
        <h1 style={{fontSize: '24px', fontWeight: 'bold'}}> Thank you for reserving with CheapFlights.net </h1>
        <p>Your flight is reserved</p>
        <p>User Name: {userName}</p>
        <p>Airline: {airline}</p>
        <p>Flight No.: {flightNo}</p>
        <p>Depart: {departs.toString()}</p>
        {/* <p>Departure: {departs}</p> */}
      </div>
    );
  }
}
 
module.exports = Show;