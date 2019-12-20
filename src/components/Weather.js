import React from 'react';

const Weather = props => {
    const { temperature, city, country, humidity, description, error } = props

    return (
        <React.Fragment>
            {city && country && <p>Location: {city}, {country}</p>}
            {temperature && <p>Temperature: {temperature}</p>}
            {humidity && <p>Humidity: {humidity}</p>}
            {description && <p>Description: {description}</p>}
            {error && <p>{error}</p>}


        </React.Fragment>
    )
}


export default Weather;