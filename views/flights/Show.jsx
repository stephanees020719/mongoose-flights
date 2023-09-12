
const React = require('react')
 
class Show extends React.Component {
  render () {
    const {  airline, flightNo, departs } = this.props.flight
 
    return (
      <div style={{backgroundColor: 'white', color: 'black', fontFamily: 'Arial, sans-serif'}}>
        <h1 style={{fontSize: '24px', fontWeight: 'bold'}}> Thank you for visiting CheapFlights.net </h1>
        <p>Your  created flight is  </p>
        {/* <p>User Name: {userName}</p> */}
        <p>Airline: {airline}</p>
        <p>Flight No.: {flightNo}</p>
        <p>Depart: {departs.toString()}</p>
        {/* <p>Departure: {departs}</p> */}
      </div>
    );
  }
}
 
module.exports = Show;