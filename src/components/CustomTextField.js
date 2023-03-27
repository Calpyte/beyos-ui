import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import { EventEmitter } from 'events';

function CustomTextField(props) {
    const { id, name, value, onChange, required, minLength, maxLength, pattern, varient } = props;

    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        onChange(event.target.value);
    };

    const handleBlur = () => {
        if (required && value === '') {
            setError(`${label} is required.`);
        } else if (minLength && value.length < minLength) {
            setError(`${label} must be at least ${minLength} characters.`);
        } else if (maxLength && value.length > maxLength) {
            setError(`${label} must be at most ${maxLength} characters.`);
        } else if (pattern && !RegExp(pattern).test(value)) {
            setError(`${label} is not valid.`);
        } else {
            setError(null);
        }
    };

    useEffect(() => {}, []);

    return (
        <TextField
            style={{ marginBottom: '2%' }}
            fullWidth
            label={name}
            variant={varient ? varient : 'filled'}
            name={id}
            id={id}
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
        />
    );
}

CustomTextField.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    varient: PropTypes.string,
    value: PropTypes.any,
    required: PropTypes.bool,
    onChange: PropTypes.any,
    pattern: PropTypes.any,
    maxLength: PropTypes.number,
    minLength: PropTypes.number
};
export default CustomTextField;
