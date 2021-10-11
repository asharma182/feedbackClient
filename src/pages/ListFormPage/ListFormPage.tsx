import React, { useEffect, useState } from 'react'
import { getAllFeedbacks, removeFeedback } from '../../services/ajax'
import { Form } from '../../component/Form'
import './listFormPage.css'
import avatar from '../../assets/images/avatar.png';
import { Button } from '../../component/Button';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'

interface Feedback {
    id: number,
    name: string,
    age: number,
    feedback: string
}
const feedback: Feedback = {
    'id': 0,
    'name': '',
    'age': 0,
    'feedback': ''
}

export const ListFormPage = () => {

    const [feedbacks, setFeedback] = useState<Feedback[]>([feedback])

    useEffect(() => {
        async function getFeedback() {
            const getFeedbacks = await getAllFeedbacks()
            setFeedback(getFeedbacks)
        }
        getFeedback()
    }, [])

    return (
        <div className="list-group">
            <h1>List of Feedbacks</h1>
            <ul>
                {feedbacks.length > 0 && feedbacks.map((fd) => <Item key={fd.id} item={fd} />)}
            </ul>
        </div>
    )
}


function Item({ item }: any) {
    const deleteFeedback = async () => {
        await removeFeedback(item.id)
        window.location.reload()
    }

    const history = useHistory();

    function handleClick() {
        history.push("/edit", item);
    }

    return <div className="feedback-container">

        <div className="user-det-container">
            <img src={avatar} alt="avatar" width="50" height="50" className="avatar" />
            <li>{item.name}</li>
            <li>Age: {item.age}</li>
        </div>

        <div className="text-container">
            <h3 className="feedback-text">{item.feedback}</h3>
        </div>

        <div className="button-container">
            <Link to={{ pathname: "/edit/" + item.id, state: item }} >Edit</Link>
            <Button onclick={() => deleteFeedback()} title={'Delete'} theme={'btn-danger'} />
        </div>

    </div>
}
