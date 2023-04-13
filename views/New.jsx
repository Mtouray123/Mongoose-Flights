const React = require('react');

function New() {
    return (
        <div>
            <h1>New Flight Form</h1>

            <form action='/flights' method='POST'>

                Airline: <input type="text" name="airline"/>
                <br/>

                Flight No.: <input type="number" name="flightNo"/>
                <br/>

                Departure Date: <input type='date' name="departs"/>
                <br/>

                <input type="submit" value="Create New Flight"/>

            </form>
        </div>
    )
}

module.exports = New;