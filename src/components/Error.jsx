import React from 'react';
import PropTypes from 'prop-types'

const Error = ({msg}) => {
    return (
        <div className="alert alert-danger">
            {msg}
        </div>
    );
}

Error.propTypes = {
    msg: PropTypes.string.isRequired
}

export default Error;