import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Header = (props) => { 
    return (
         <h1 className="Header text-center">
         {props.headerMessage}
         </h1>
    );
};

Header.propTypes = {
    headerMessage: PropTypes.string
};

export default Header