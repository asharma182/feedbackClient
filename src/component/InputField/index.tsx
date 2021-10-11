import React from 'react'
import './inputfield.css'

export const InputField = (props: any) => {
    return (
        <input type="text" className="form-control" value={props.value} onChange={(e) => props.onchange(e.target.value)} />
    )
}