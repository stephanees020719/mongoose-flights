
const React = require("react");

class Index extends React.Component {
  render() {
    const { flights } = this.props;
    return (
      <div style={{ backgroundColor: "white", color: "black", fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Welcome to cheap Airlines.net</h1>
        <nav>
          <a href="/flights/new" style={{ textDecoration: "none", color: "blue" }}>Create A Flight</a>
        </nav>
        <ul>
          {flights.map((flight, i) => {
            return (
              <li key={i}>
                {" "}
                <a href={`/flights/${flight._id}`} style={{ textDecoration: "none", color: "blue" }}>
                  Airline: {flight.airline}
                </a>{" "}
                Flight No. {flight.flightNo}
                <p style={{ fontWeight: "bold" }}>Departs: {flight.departs.toString()}</p>
                <br></br>
             
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;