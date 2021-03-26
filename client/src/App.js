import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Event from './components/Event';
import UserRegisterForm from './components/UserRegisterForm'
import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import EventForm from './components/EventForm'
import {Navbar, Button, Nav, Form, FormControl} from 'react-bootstrap';

function App() {
  return (
    <Provider store={store}>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Smart Software Systems</Navbar.Brand>
    <Nav className="container-fluid">
      <Nav.Link href="/">Начало</Nav.Link>
      <Nav.Link href="/EventForm">Добави събитие</Nav.Link>
      <Nav.Link className="border-left pl-2 ml-auto" href="/userRegister">Регистрация</Nav.Link>
      <Nav.Link href="/userLogin">Вход</Nav.Link>
    </Nav>
  </Navbar>
      <Router>
        <Route path="/EventForm" exact={true} render={(props) =>{
          return (<EventForm {...props}/>)
        }}/>
        <Route path="/" exact={true} render={(props) =>{
          return (<Event {...props} />)
        }}/>
        <Route path="/userRegister" exact={true} render={(props) =>{
          return (<UserRegisterForm {...props} />)
        }}/>
      </Router>
    </Provider>
  );
}

export default App;
