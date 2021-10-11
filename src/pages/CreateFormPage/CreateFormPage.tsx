import React from 'react'
import { Form } from '../../component/Form'
import { createFeedbackForm } from '../../services/ajax'

export const CreateFormPage = () => {
    const handlePostEvent = () => {
        window.location.reload()
    }
    return (
        <div>
            <Form onSubmit={createFeedbackForm} refresh={handlePostEvent}/>
        </div>
    )
}