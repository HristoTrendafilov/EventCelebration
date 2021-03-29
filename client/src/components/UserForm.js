import React, {Fragment} from 'react';
import {Button, Form} from "react-bootstrap";

const UserForm = ({pageMessage, handleSubmit, values, handleInputChange}) => {
    return (
        <Fragment>
            <h1 className="text-center mt-4">{pageMessage}</h1>
            <Form style={{maxWidth: '30vw'}} className="container mt-5" onSubmit={handleSubmit}>
                <div>
                    <Form.Group>
                        <Form.Label>Име</Form.Label>
                        <Form.Control
                            name="username"
                            value={values.username}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Парола</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Изпрати
                    </Button>
                </div>
            </Form>
        </Fragment>
    )
}
export default UserForm;
