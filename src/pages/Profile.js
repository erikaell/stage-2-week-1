import data from '../dummyData/product'
import { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { Col, Row, Card, Button } from 'react-bootstrap'

function Profile() {

    const [datas] = useState(data)

    return (
        <div className='user-container'>
            <div className='row'>
            <div className="col-md-3">
                <p className='user-text'>My Profile</p>
                <img src='http://pm1.narvii.com/7232/f68a08a5a03514a61ee1a185120717c803faf199r1-750-1060v2_uhq.jpg' className="profile-pict" alt="..." />
            </div>
            <div className="col-md-5 pt-5 mb-3">
                <p className="card-title-text">Name</p>
                <p className="profile-card-text m-0">Osamu Dazai</p>
                <p className="card-title-text mt-4">Email</p>
                <p className="profile-card-text m-0">osamudazai@ada.com</p>
                <p className="card-title-text mt-4">Phone</p>
                <p className="profile-card-text m-0">08584444444</p>
                <p className="card-title-text mt-4">Gender</p>
                <p className="profile-card-text m-0">Male</p>
                <p className="card-title-text mt-4">Address</p>
                <p className="profile-card-text m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at mauris elementum, venenatis orci non, ornare mi. Sed ultricies quam leo, sit amet mattis velit volutpat sed. Nulla finibus rhoncus lorem id fermentum.</p>
                <Link to="/user/profile/edit"><Button variant="success" className="button-login">Edit Profile</Button></Link>
            </div>
            <div className="col-md-4" style={{ padding: '0' }}>
                <p className='user-text'>My Transaction</p>
                {datas.map((data) => (
                    <Card className='mb-2 history-card' key={data.id}>
                        <Row>
                            <Col sm={3}>
                                <img src={data.img} alt="" className="img-history" />
                            </Col>
                            <Col sm={5}>
                                <p className='card-title-text' style={{ marginTop: '10px' }}>{data.name}</p>
                                <p className='history-card-date'>Saturday, 14 Juli 2021</p>
                                <p className='history-card-text' style={{ marginTop: '10px' }}>Price: Rp. {data.price}</p>
                                <p className='history-card-text' style={{ marginTop: '20px' }}><b>Sub Total: Rp. </b></p>
                            </Col>
                            <Col sm={2}>
                                <img src={logo} alt="" style={{ maxWidth: '70px', marginTop: '20px' }} />
                            </Col>
                        </Row>
                    </Card>
                ))}
            </div>
            </div>
        </div>
    );
}

export default Profile;