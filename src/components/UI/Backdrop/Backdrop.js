import React from 'react';
import propTypes from 'prop-types';

import classes from './Backdrop.module.css'; 

const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

backdrop.propTypes = {
    show: propTypes.oneOfType([propTypes.bool, propTypes.object]).isRequired,
    clicked: propTypes.func.isRequired
}

export default backdrop;