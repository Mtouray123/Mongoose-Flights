const React = require('react');
// const flights = require('../models/Flight');

function Index(props) {
    const { flights } = props
    console.log(flights);

    return (
        <div>
            <nav>
                <a href="/flights/New">Book New Flight</a> 
            </nav>

            <h1>Flights Index Page</h1>
            
            <ul>
                {flights.map((flight, i) => {
                    return (
                        <li key={flight._id}>
                        The <a href={`/flights/${flight._id}`}>{flight.airline}</a>
                        {' '}flight number: {flight.flightNo}{'. '}
                        {new Date(flight.departs).toLocaleDateString()}
                    </li>
                    );
                })}
            </ul>
        </div>
    );
}

module.exports = Index;