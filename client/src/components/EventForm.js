import { React, Fragment } from "react";
import { Form, Button } from "react-bootstrap"

const EventForm = (props) => {
    return (
        <Fragment>
            <h1 className="text-center mt-4">Добавете събитие</h1>
            <Form className="container mt-5">
                <div className="row">
                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                        <Form.Label>Име</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                        <Form.Label>Дата</Form.Label>
                        <Form.Control type="date"/>
                    </Form.Group>
                </div>
                <div className="row">
                    <Form.Group className="col-md-6" controlId="formBasicEmail">
                        <Form.Label>Събитие</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group className="col-md-6" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Съобщение</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </div>
                <Button className="w-100 mt-5" variant="success" type="submit">
                    Добавете
                </Button>
            </Form>
        </Fragment>)
}

export default EventForm;