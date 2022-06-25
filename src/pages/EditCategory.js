import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

function EditCategory() {
    const [state, setState] = useState({
        categoryName: '',
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
                <p className="table-title">Edit Category</p>
                <Form  onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Control onChange={handleOnChange} value={state.categoryName} name="categoryName" type="text" placeholder="Category Name" className='mt-5'></Form.Control>
                </Form.Group>
                <Button variant="success" type='submit' className="button-login-login">Save</Button>
                </Form>
            </div>
    );
}

export default EditCategory;