import React, {Fragment} from 'react';
import {Form, Button} from 'react-bootstrap';
import UseForm from './useForm';
import * as actions from '../actions/user';
import {connect} from 'react-redux';
import UserForm from "./UserForm";
import {initialFieldValues} from './UserRegisterForm'

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
            window.alert("Моля, попълнете всички полета.");
        }else{
            console.log("Managed to send");
            localStorage.setItem('isLoggedIn', 'true')
            props.loginUser(values, () => { props.history.push('/') });
        }
    }

    return(
        <UserForm
            pageMessage = 'Вход'
            values={values}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}  />
    )
}

const mapStateToProps = state => ({
    eventList: state.event.list
})

const mapActionToProps = {
    loginUser: actions.login,
}

export default connect(mapStateToProps, mapActionToProps)(userRegisterForm);
