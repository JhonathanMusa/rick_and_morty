import React from 'react'

export const FormInput = (props) => {
    return (
        <input
            name={props.name}
            onChange={props.handleChange}
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
        />
    )
}
