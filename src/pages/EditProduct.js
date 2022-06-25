import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

function EditProduct() {
    const [state, setState] = useState({
        image: '',
        name: '',
        description: '',
        price: '',
        stock: '',
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
            <div className="edit-container">
                <p className="table-title">Edit Product</p>
                <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="formFile" className="mt-5">
                    <Form.Control type="file" onChange={handleOnChange} value={state.image} name="image"  />
                </Form.Group>
                <Form.Group>
                    <Form.Control type="text" onChange={handleOnChange} value={state.name} name="name" placeholder="Product Name" className='mt-3'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control as="textarea" onChange={handleOnChange} value={state.description} name="description" rows={3} placeholder="Product Description" className='mt-3'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="text" onChange={handleOnChange} value={state.price} name="price" placeholder="Product Price" className='mt-3'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="text" onChange={handleOnChange} value={state.stock} name="stock" placeholder="Product Stock" className='mt-3'></Form.Control>
                </Form.Group>
                <Button variant="success" type="submit" className="button-login-login">Save</Button>
                </Form>
            </div>
    );
}

export default EditProduct;