import React, {useState, useEffect} from "react";
import {connect} from "react-redux"
import * as actions from "../actions/event"
import {Button} from 'react-bootstrap';

const Event = (props) => {
    // const[x, setX] = useState(0)
    // setX(5)

    useEffect(() => {
        props.fetchAllEvents()
    },[])

    return(
        <Button variant="outline-primary">Primary</Button>
    )
}


const mapStateToProps = state => ({
    eventList: state.event.list
})

const mapActionToProps = {
    fetchAllEvents: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(Event);