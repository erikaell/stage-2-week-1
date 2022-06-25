import data from '../dummyData/product'
import { Table, Button, Modal } from 'react-bootstrap'
import { useState } from 'react'

function ListCategory() {

    const [datas] = useState(data)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='table-container'>
            <p className='table-title'>List Category</p>
            <Table striped bordered hover variant="dark">
                <thead className=''>
                    <tr>
                        <th>No</th>
                        <th>Photo</th>
                        <th>Product Name</th>
                        <th style={{ width: '15%' }}>Product Desc</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th style={{ width: '30%' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>Picture.jpg</td>
                            <td>{data.name}</td>
                            <td className='text-truncate'>{data.desc}</td>
                            <td>{data.price}</td>
                            <td>{data.stock}</td>
                            <td><Button variant="success" className="button-table">Edit</Button>
                                <Button variant="danger" onClick={handleShow} className="ms-2 button-table">Delete</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this data?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ListCategory;