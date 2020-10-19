import React from 'react';
import propTypes from 'prop-types';

import classes from './Button.module.css';

const button = (props) => (
    <button 
        className={[classes.Button, classes[props.btnType]].join(' ')} 
        onClick={props.clicked}>
            {props.children}
    </button>
);

button.propTypes = {
    btnType: propTypes.string.isRequired,
    clicked: propTypes.func.isRequired
}

export default button;