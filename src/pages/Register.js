import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import logo from '../assets/logo.png'
import { useContext, useState } from 'react'
import { UserContext } from '../context/userContext';
import { useMutation } from 'react-query';
import { API } from '../config/api';

function Register() {
    const [state, dispatch] = useContext(UserContext);
    const [message, setMessage] = useState(null);
    const [form, setForm] = useState({
      name: '',
      email: '',
      password: '',
    });

      const { name, email, password } = form;

      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = useMutation(async (e) => {
        try {
          e.preventDefault();
    
          // Configuration Content-type
          const config = {
            headers: {
              'Content-type': 'application/json',
            },
          };
    
          // Data body
          const body = JSON.stringify(form);
    
          // Insert data user to database
          const response = await API.post('/register', body, config);
    
          // Notification
          if (response.data.status === 'success...') {
            const alert = (
              <Alert variant="success" className="py-1">
                Success
              </Alert>
            );
            setMessage(alert);
            setForm({
              name: '',
              email: '',
              password: '',
            });
          } else {
            const alert = (
              <Alert variant="danger" className="py-1">
                Failed
              </Alert>
            );
            setMessage(alert);
          }
        } catch (error) {
          const alert = (
            <Alert variant="danger" className="py-1">
              Failed
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
                        <Link to="/"><Button variant="danger" className="button-login">Login</Button></Link>
                        <Link to="/register"><Button variant="link" className="button-register">Register</Button></Link>
                </div>
                <div className="col-md-6">
                    <div className="form-register">
                        <p className="right-login-text">Register</p>
                        {message && message}
                        <Form onSubmit={(e) => handleSubmit.mutate(e)}>
                        <Form.Group>
                            <Form.Control type="text" onChange={handleChange} value={name} name="name" placeholder="Name"></Form.Control>
                        </Form.Group>
                        <Form.Group className="form-margin">
                            <Form.Control type="email" onChange={handleChange} value={email} name="email" placeholder="Email"></Form.Control>
                        </Form.Group>
                        <Form.Group className="form-margin">
                            <Form.Control type="password" onChange={handleChange} value={password} name="password" placeholder="Password"></Form.Control>
                        </Form.Group>
                        <Button variant="danger" type="submit" className="button-login-login">Register</Button>
                        </Form>
                    </div>
                </div>
        </div>
    );
  }

export default Register;