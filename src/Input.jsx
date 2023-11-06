/* eslint-disable react/prop-types */
import { useState } from 'react'

function Input({ descriptor, isSubmitted }) {
    const [value, setValue] = useState('');

    if (!isSubmitted) {return (
        <label htmlFor={descriptor}>
            {descriptor}:
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </label>
    )}
    return (<p className={descriptor}>{value}</p>)
}

export default Input