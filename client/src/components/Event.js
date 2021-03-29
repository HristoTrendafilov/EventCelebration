import React, {useState, useEffect, Fragment} from "react";
import { connect } from "react-redux";
import * as actions from "../actions/event";
import { Table, Button } from 'react-bootstrap';
import "./event.css";
import  { Link } from 'react-router-dom';
import * as moment from 'moment'

const Event = (props) => {

    useEffect(() => {
        props.fetchAllEvents()
    }, [])

    const onDelete = id => {
        if(window.confirm('Сигурни ли сте, че искате да изтриете този запис?')){
            props.deleteEvent(id)
            window.alert('Успешно изтрихте събитие.')
            window.location.reload()
        }
    }

    return (
        <Fragment>
            <div className="mt-3">
                <h1 className="text-center">Добре дошли в страницата за събития.</h1>
                <div className="mt-5">
                    <Link to='/EventForm' >
                        <Button className="w-100 mb-4" variant="primary">Добавете събитие</Button>
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
                                        <td className="text-center">{moment(record.date).format('DD/MM/YYYY')}</td>
                                        <td className="text-center">{record.eventName}</td>
                                        <td className="w-50">{record.message}</td>
                                        <Button className="btn-sm w-100" onClick={() => onDelete(record.id)} variant="danger">Изтрий</Button>
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
    fetchAllEvents: actions.fetchAll,
    deleteEvent: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(Event);
