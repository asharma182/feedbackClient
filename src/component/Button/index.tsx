import React from 'react'
import './button.css'

export const Button = (props: any) => {
    return (
        <button type="submit" className={`btn button ${props.theme}`} onClick={props?.onclick}>{props.title}</button>
    )
}