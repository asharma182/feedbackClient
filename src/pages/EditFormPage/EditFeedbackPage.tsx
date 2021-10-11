import React, { useEffect, useState } from 'react';
import { Form } from '../../component/Form'
import { useLocation, useHistory, useParams } from "react-router-dom"
import { InputField } from '../../component/InputField';
import { Textarea } from '../../component/Textarea';
import { getOneFeedback, updateFeedback } from '../../services/ajax';

interface Feedback {
    id: number,
    name: string,
    age: number,
    feedback: string
}

export const EditFeedbackPage = () => {
    const history = useHistory()
    const [feedback, setFeedback] = useState()
    const { id }: any = useParams();

    const handlePostEvent = () => {
        history.goBack();
    }
    useEffect(() => {
        async function getFeedback() {
            const getFeedbacks = await getOneFeedback(id)
            console.log(getFeedbacks)
            setFeedback(getFeedbacks[0])
        }
        getFeedback()
    }, [id])

    return (
        <Form onSubmit={updateFeedback} refresh={handlePostEvent} feedbackdata={feedback} />
    )
}