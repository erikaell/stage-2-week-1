import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useState } from 'react'

function Login() {

    const [state, setState] = useState({
        email: '',
        password: ''
      })
    
      const handleOnChange = (e) => {
        // setState here
        setState({
          ...state,
          [e.target.name]: e.target.value
        })
      }
    
      const handleOnSubmit = (e) => {
        e.preventDefault()
        //print state value with console.log here
        console.log(state)
      }
    
    return (
        <div className="login-container row">
                <div className="col-md-6 left-login">
                    <img src={logo} style={{ maxWidth: '264px' }} alt="" />
                        <p className="left-login-text-header">Easy, Fast and Reliable</p>
                        <p className="left-login-text">Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in Indonesia</p>
                        <Link to="/login"><Button variant="danger" className="button-login">Login</Button></Link>
                        <Link to="/register"><Button variant="link" className="button-register">Register</Button></Link>
                </div>
                <div className="col-md-6">
                    <div className="form-login">
                        <p className="right-login-text">Login</p>
                        <Form onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Control onChange={handleOnChange} value={state.email} name="email" type="email" placeholder="Email"></Form.Control>
                        </Form.Group>
                        <Form.Group className="form-margin">
                            <Form.Control onChange={handleOnChange} value={state.password} name="password" type="password" placeholder="Password" ></Form.Control>
                        </Form.Group>
                        <Button variant="danger" type="submit" className="button-login-login">Login</Button>
                        </Form>
                    </div>
                </div>
        </div>
    );
  }

export default Login;