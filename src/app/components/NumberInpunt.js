import React from  'react'

const NumberInput = ({
    textLabel,
    type="Number",
    name,
    value,
    handleChange = ()=>{},
    placeholder='',
    min,
    max
}) => (
    <input 
        type={type} 
        className="box" 
        id={name} 
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        />
)

export default NumberInput 