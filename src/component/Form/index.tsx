import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from "react-router-dom"

import { Button } from '../Button'
import { Header } from '../Header'
import { InputField } from '../InputField'
import { Label } from '../Label'
import { Textarea } from '../Textarea'
import { createFeedbackForm } from '../../services/ajax'
import './form.css';

interface Feedback {
    id: number,
    name: string,
    age: number,
    feedback: string
}

export const Form = (props: any) => {

    const id = props?.feedbackdata?.id
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [feedback, setFeedback] = useState('')

    useEffect(() => {
        if (props?.feedbackdata !== undefined) {
            setName(props?.feedbackdata?.name)
            setAge(props?.feedbackdata?.age)
            setFeedback(props?.feedbackdata?.feedback)
        }

    }, [props?.feedbackdata])

    return (
        <div className="form-cotainer"
            style={{ backgroundColor: "#f8f9fa", height: "100%" }}>
            <Header >Provide us feedback</Header>
            <div className="modal-body">
                <form id="contact-form"
                    onSubmit={() => props.onSubmit({ id, name, age, feedback }).then(() => props.refresh())}
                    method="POST">
                    <div className="form-group">
                        <Label labelfor={'name'}>Name</Label>
                        <InputField value={name} type={'text'} onchange={setName} />
                    </div>
                    <div className="form-group">
                        <Label labelfor={'age'}>Age</Label>
                        <InputField value={age} type={'number'} onchange={setAge} />
                    </div>
                    <div className="form-group">
                        <Label labelfor={'feedback'}>Feedback</Label>
                        <Textarea value={feedback} onchange={setFeedback} />
                    </div>
                    <div className="form-group">
                        <Button title={'Submit'} theme={'btn-primary'} />
                    </div>
                </form>
            </div>
        </div>
    )
}