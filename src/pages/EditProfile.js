import { Form, Button } from "react-bootstrap";
import { useState } from 'react'

function EditProfile() {
    const [state, setState] = useState({
        image: '',
        name: '',
        phone: '',
        gender: '',
        address: ''
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
        <div>
            <div className="edit-container">
                <p className="table-title">Edit Profile</p>
                <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="formFile" className="mt-5">
                    <Form.Control type="file" onChange={handleOnChange} value={state.image} name="image" />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="text" onChange={handleOnChange} value={state.name} name="name" placeholder="Name" className='mt-3'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="text" onChange={handleOnChange} value={state.phone} name="phone" placeholder="Phone" className='mt-3'></Form.Control>
                </Form.Group>
                <Form.Select aria-label="Default select example" onChange={handleOnChange} value={state.gender} name="gender" className="mt-3">
                    <option>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </Form.Select>
                <Form.Group>
                    <Form.Control as="textarea" rows={3} onChange={handleOnChange} value={state.address} name="address" placeholder="Address" className='mt-3'></Form.Control>
                </Form.Group>
                <Button variant="success" type="submit" className="button-login-login">Save</Button>
                </Form>
            </div>
        </div>
    );
}

export default EditProfile;