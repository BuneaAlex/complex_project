import React from 'react';
import { Field } from 'react-final-form';

const InputField = ({label,name}) =>
{
    return(
        <div className='text-box'>
            <label>{label}</label>
            <Field name={name}
            placeholder={`Enter ${name}`}
            component="input"/>
        </div>
        
    )
}

export default InputField;