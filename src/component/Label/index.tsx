import React from 'react'
import './label.css'

export const Label = (props: any) => {
    return (
        <label className="label" htmlFor={props.labelfor}>{props.children}</label>
    )
}