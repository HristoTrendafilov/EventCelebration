import React, {useState, useEffect, Fragment} from "react";
import {connect} from "react-redux"
import * as actions from "../actions/event"
import {Table, Button} from 'react-bootstrap';
import "./event.css";
import  { Link } from 'react-router-dom'

const Event = (props) => {

    useEffect(() => {
        props.fetchAllEvents()
    }, [])

    return (
        <Fragment>
            <div className="mt-3">
                <h1 className="text-center">Добре дошли в страницата за събития.</h1>
                <div className="mt-5">
                <Link to='/EventForm' >
                        <Button className="float-md-right mr-5 mb-3 w-100" variant="primary">Добавете събитие</Button>
                    </Link>
                <div>
                    <Table striped bordered hover size="sm">
                        <thead>
                        <tr>
                            <th className="text-center">Име</th>
                            <th className="text-center">Дата</th>
                            <th className="text-center">Събитие</th>
                            <th className="text-center">Съобщение</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            props.eventList.map((record, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="text-center w-25">{record.personName}</td>
                                        <td className="text-center">{record.date.toString().slice(0,10)}</td>
                                        <td className="text-center">{record.eventName}</td>
                                        <td className="w-50">{record.message}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </div>
            </div>
                </div>
        </Fragment>
    )
}


const mapStateToProps = state => ({
    eventList: state.event.list
})

const mapActionToProps = {
    fetchAllEvents: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(Event);
