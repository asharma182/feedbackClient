import React from 'react'

export const Textarea = (props: any) => {
    return (
        <textarea className="form-control" rows={5} value={props.value} onChange={(e) => props.onchange(e.target.value)} /> 
    )
}