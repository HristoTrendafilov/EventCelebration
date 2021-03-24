import React, {useState, useEffect, Fragment} from "react";
import {connect} from "react-redux"
import * as actions from "../actions/event"
import {Table, Button} from 'react-bootstrap';
import "./event.css";

const Event = (props) => {
    // const[x, setX] = useState(0)
    // setX(5)

    useEffect(() => {
        props.fetchAllEvents()
    }, [])

    return (
        <Fragment>
            <div className="mt-3">
                <h1 className="text-center">Добре дошли в страницата за събития.</h1>
                <Button className="float-md-right mr-5 mb-3 w-25" variant="outline-primary">Добавете събитие</Button>
                <Table className="mt-5" striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th className="text-center">Добавил</th>
                        <th>Дата</th>
                        <th>Събитие</th>
                        <th>Съобщение</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>message</td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>message</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        <td>message</td>
                    </tr>
                    </tbody>
                </Table>
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
