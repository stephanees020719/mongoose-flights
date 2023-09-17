const React = require('react');

class Show extends React.Component {
  
  render() {
    const { flight } = this.props;
    
    return (
      <div style={{ backgroundColor: 'gray', padding: '20px' }}>
        <p>Airline: {flight.airline}</p>
        <p>Flight Number: {flight.flightNo}</p>
        <p>Departure Time: {`${flight.departs.toLocaleString()}`}</p>
        <p>Airport: {flight.airport}</p>
        {flight.destinations.map((destination, i) => {
          return (
            <div key={i} style={{ marginBottom: '10px' }}>
              <p>Destination: {`${destination.airport}`}</p>
              <p>Arrival: {`${destination.arrival}`}</p>
            </div>
          );
        })}
        <form action={`/flights/${flight._id}?_method=PUT`} method="POST">
         Destination:{" "} 
          <label style={{ display: 'block', marginBottom: '10px' }}>
        
              <select name="airport" style={{ marginLeft: '10px' }}>
              <option value="SAN">SAN</option>
              <option value="AUS">AUS</option>
              <option value="DAL">DAL</option>
              <option value="LAX">LAX</option>
              <option value="SEA">SEA</option>
            </select>
          </label>
          <input type="datetime-local" name="arrival" style={{ marginLeft: '10px' }} />
          <input type="submit" value="Submit New Destination" style={{ marginLeft: '10px' }} />
        </form>
         
      </div>
    );
  }
}
module.exports = Show;



