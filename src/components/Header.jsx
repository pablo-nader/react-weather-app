import React from 'react';
import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header>
            <h1 className="text-center m-4">{title}</h1>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;