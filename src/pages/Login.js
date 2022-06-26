import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { useMutation } from 'react-query';

import { API } from '../config/api';

function Login() {
  let navigate = useNavigate();

  const title = 'Login';
  document.title = 'DumbMerch | ' + title;

  const [state, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      // Data body
      const body = JSON.stringify(form);

      // Insert data for login process
      const response = await API.post('/login', body, config);

      // Checking process
      if (response?.status === 200) {
        // Send data to useContext
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: response.data.data,
        });

        // Status check
        if (response.data.data.status === 'Admin') {
          navigate('/category');
        } else {
          navigate('/home');
        }

        const alert = (
          <Alert variant="success" className="py-1">
            Login success
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Login failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

    
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
                        {message && message}
                        <Form onSubmit={(e) => handleSubmit.mutate(e)}>
                        <Form.Group>
                            <Form.Control onChange={handleChange} value={email} name="email" type="email" placeholder="Email"></Form.Control>
                        </Form.Group>
                        <Form.Group className="form-margin">
                            <Form.Control onChange={handleChange} value={password} name="password" type="password" placeholder="Password" ></Form.Control>
                        </Form.Group>
                        <Button variant="danger" type="submit" className="button-login-login">Login</Button>
                        </Form>
                    </div>
                </div>
        </div>
    );
  }

export default Login;