import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types'

const Form = ({search}) => {
    let [error, setError] = useState(false);
    let [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (input.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        search(input);
    }

    return (
        <Fragment>
            {
            error ?
            <Error msg="Input is required" />
            : null
            }
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleChange}
                    type="text" 
                    className="form-control mb-3" 
                    name="city" 
                    placeholder="City Name"
                    autoFocus 
                />
                <button className="btn btn-primary form-control">Get Weather</button>
            </form>
        </Fragment>
    );
}

Form.propTypes = {
    search: PropTypes.func.isRequired
}

export default Form;