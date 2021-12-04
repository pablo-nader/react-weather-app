import React, { Fragment } from 'react';
import Error from './Error';
import PropTypes from 'prop-types'

const ViewWeather = ({weather}) => {
    return (
        <Fragment>
            {
            (weather.cod === '404') ?
            <Error msg={weather.message} /> :
            <Fragment>
                <h2>Weather in {weather.name}</h2>
                <div className="fs-2 mb-3">Temp: {weather.main.temp} °F</div>
                <div>Min Temp: {weather.main.temp_min} °F</div>
                <div>Max Temp: {weather.main.temp_max} °F</div>
            </Fragment>
            }
        </Fragment>
    );
}

ViewWeather.propTypes = {
    weather: PropTypes.object.isRequired
}
 
export default ViewWeather;