import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Event from './components/Event';
import UserRegisterForm from './components/UserRegisterForm'
import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import EventForm from './components/EventForm'
import {Navbar, Button, Nav, Form, FormControl} from 'react-bootstrap';
import UserLoginForm from "./components/UserLoginForm";
import { Fragment } from 'react';

const logout = () =>{
  localStorage.clear()
  window.location.reload()
}

const username = localStorage.getItem('username');

function App() {

  const isLoggedIn = localStorage.getItem('isLoggedIn')

  return (
    <Provider store={store}>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Smart Software Systems</Navbar.Brand>
    <Nav className="container-fluid">
      <div className='row ml-3'>
        <Nav.Link href="/">Начало</Nav.Link>
        <Nav.Link href="/EventForm">Добави събитие</Nav.Link>
      </div>
      {isLoggedIn ?
          <Fragment>
            <div className='row mr-2'>
              <p className='mr-3 text-white h4'>{username}</p>
              <Button onClick={logout} className='btn'>Изход</Button>
            </div>
          </Fragment> :
        <Fragment>
            <Nav.Link className="border-left pl-2 ml-auto" href="/userRegister">Регистрация</Nav.Link>
            <Nav.Link href="/userLogin">Вход</Nav.Link>
        </Fragment>
      }
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
        <Route path="/userLogin" exact={true} render={(props) =>{
          return (<UserLoginForm {...props} />)
        }}/>
      </Router>
    </Provider>
  );
}

export default App;
