const React = require('react')
 
class Index extends React.Component {
  render() {
    const { flights } = this.props;
    return (
      <div style={{ backgroundColor: 'gray', padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Welcome to CheapFlights.net</h1>
        <nav style={{ marginBottom: '20px' }}>
          <a href="/flights/new" style={{ textDecoration: 'none', color: 'blue' }}>
            Create New Flight
          </a>
        </nav>
        <ul>
          {flights.map((flight, i) => {
            return (
              <li
                key={i}
                style={{
                  backgroundColor: 'white',
                  padding: '10px',
                  marginBottom: '10px',
            
            }}
              >
                <p style={{ marginBottom: '5px' }}>{`Airline: ${flight.airline}`}</p>
                <p style={{ marginBottom: '5px' }}>{`FlightNo: ${flight.flightNo}`}</p>
                <p style={{ marginBottom: '5px' }}>{`Departure Time: ${flight.departs}`}</p>
                <a href={`/flights/${flight._id}`} style={{ textDecoration: 'none', color: 'blue' }}>
                  Flight details
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
 
module.exports = Index;



