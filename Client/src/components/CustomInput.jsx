import React, { useState, useRef } from "react";
import PropTypes from 'prop-types';
import { isEmpty } from "lodash";
// import '../../images/'

const CustomInput = ({placeHolder = "Password"}) => {
    const ref = useRef();
    const [text, setText] = useState('');
    const onInputChange = (event) => {
        const {target: {value}} = event;
        setText(value);
        console.log(ref);
        console.log(text, event, value);

    };
    return (
        <input className="customInput" placeholder={placeHolder} text={text} onChange={console.log(1)} ref={ref} />
    );
};

CustomInput.propTypes = {
    placeHolder: PropTypes.string,
};

export default CustomInput;