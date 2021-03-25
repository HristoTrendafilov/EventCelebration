import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Event from './components/Event';
import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import EventForm from './components/EventForm'
import {Navbar, Button, Nav, Form, FormControl} from 'react-bootstrap';

function App() {
  return (
    <Provider store={store}>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Smart Software Systems</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Начало</Nav.Link>
      <Nav.Link href="/EventForm">Добави събитие</Nav.Link>
    </Nav>
  </Navbar>
      <Router>
        <Route path="/EventForm" exact={true} render={(props) =>{
          return (<EventForm {...props}/>)
        }}/>
        <Route path="/" exact={true} render={(props) =>{
          return (<Event {...props} />)
        }}/>
      </Router>
    </Provider>
  );
}

export default App;
