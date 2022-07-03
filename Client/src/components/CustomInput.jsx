import React, { useState } from "react";
import PropTypes from 'prop-types';

const CustomInput = ({placeHolder = "Password"}) => {
    const [state, setState] = useState('');
    const onInputChange = (event) => {
        const {target: {value}} = event;
        setState(value);
    };

    return (
        <>
            <input
                className="customInput"
                placeholder={placeHolder}
                text={state}
                onChange={(event) => onInputChange(event)}
            />
        </>
    );
};

CustomInput.propTypes = {
    placeHolder: PropTypes.string,
};

export default CustomInput;