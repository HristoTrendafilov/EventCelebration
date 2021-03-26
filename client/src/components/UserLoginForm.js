import React, {Fragment} from 'react';
import {Form, Button} from 'react-bootstrap';
import UseForm from './useForm';
import * as actions from '../actions/user';
import {connect} from 'react-redux';

const initialFieldValues = {
    username: '',
    password: ''
}

const userRegisterForm = (props) => {

    const validate = () => {
        let temp ={}
        temp.username = values.username?"":"Това поле е задължително."
        temp.password = values.password?"":"Това поле е задължително."
        setErrors({
            ...temp
        })

        return Object.values(temp).every(x => x =="")
    }

    const {
        values,
        setErrors,
        handleInputChange
    } = UseForm(initialFieldValues)

    const handleSubmit = e => {
        e.preventDefault()
        if(!validate()){
            window.alert("Моля, попълнете всички полета.")
        }else{
            props.loginUser(values, () =>{props.history.push('/userLogin')})
        }
    }

    return(
        <Fragment>
            <h1 className="text-center mt-4">Вход</h1>
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

const mapStateToProps = state => ({
    eventList: state.event.list
})

const mapActionToProps = {
    loginUser: actions.login,
}

export default connect(mapStateToProps, mapActionToProps)(userRegisterForm);
