import React, {useState, Fragment} from "react";
import { Form, Button } from "react-bootstrap"
import useForm from './useForm'
import * as actions from "../actions/event";
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import {currentId, setCurrentId} from './Event'

const initialFieldValues = {
    personName: '',
    date: '',
    eventName: '',
    message: ''
}

const EventForm = (props) => {

    const validate = () => {
        let temp ={}
        temp.personName = values.personName?"":"Това поле е задължително."
        temp.date = values.date?"":"Това поле е задължително."
        temp.eventName = values.eventName?"":"Това поле е задължително."
        temp.message = values.message?"":"Това поле е задължително."
        setErrors({
            ...temp
        })

        return Object.values(temp).every(x => x =="")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFieldValues)

    const handleSubmit = e => {
        e.preventDefault()
        if(!validate()){
            window.alert("Моля, попълнете всички полета.")
        }
        props.createEvent(values, () =>{window.alert('Успешно добавено събитие.')})
        props.history.push('/')
        window.location.reload()
    }

    return (
        <Fragment>
            <h1 className="text-center mt-4">Добавете събитие</h1>
            <Form className="container mt-5" onSubmit={handleSubmit}>
                <div className="row">
                    <Form.Group className="col-md-6">
                        <Form.Label>Име</Form.Label>
                        <Form.Control
                            name="personName"
                            value={values.personName}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="col-md-6">
                        <Form.Label>Дата</Form.Label>
                        <Form.Control
                            type="date"
                            name="date"
                            value={values.date}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </div>
                <div className="row">
                    <Form.Group className="col-md-6">
                        <Form.Label>Събитие</Form.Label>
                        <Form.Control
                            name="eventName"
                            value={values.eventName}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="col-md-6">
                        <Form.Label>Съобщение</Form.Label>
                        <Form.Control
                            name="message"
                            value={values.message}
                            onChange={handleInputChange}
                            as="textarea"
                            rows={3}
                        />
                    </Form.Group>
                </div>
                <Button className="w-100 mt-5" variant="success" type="submit">
                    Добавете
                </Button>
            </Form>
        </Fragment>)
}

const mapStateToProps = state => ({
    eventList: state.event.list
})

const mapActionToProps = {
    createEvent: actions.create,
    updateEvent: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(EventForm);
