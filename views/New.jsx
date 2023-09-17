const React = require('react');

class New extends React.Component {
 
  render() {
    const date = new Date();
    const futureDate = date.getDate() + 365;
    date.setDate(futureDate);
    const defaultValue = date.toLocaleDateString('en-US');
    
    
    return (
      <div style={{ backgroundColor: 'gray', padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Add New Flight</h1>
        <form action="/flights" method="POST">
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Airline:
            <input type="text" name="airline" style={{ marginLeft: '10px' }} />
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Flight Number:
            <input type="number" name="flightNo" min={10} max={9999} style={{ marginLeft: '10px' }} />
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Departure:
            <input type="datetime" name="departs" defaultValue={defaultValue} style={{ marginLeft: '10px' }} />
          </label>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Airport:
            <select name="airport" defaultValue={'DAL'} style={{ marginLeft: '10px' }}>
              <option value="SAN">SAN</option>
              <option value="AUS">AUS</option>
              <option value="DAL">DAL</option>
              <option value="LAX">LAX</option>
              <option value="SEA">SEA</option>
            </select>
          </label>
          <input type="submit" value="Submit New Flight" style={{ marginLeft: '10px' }} />
        </form>
        <a href="/flights" style={{ textDecoration: 'none', color: 'blue' }}>
          Back to flights 
        </a>
      </div>
    );
  }
}

module.exports = New;