import data from '../dummyData/product'
import { useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Product() {
    const [datas] = useState(data)


    return (
        <div className='user-container'>
            <p className='user-text'>Product</p>
            <Container className='ms-0'>
                <Row>
                    {datas.map((data) => (
                        <Col sm="2" key={data.id}>
                            <Card className="product-card mb-2">
                                <Card.Img variant="top" src={data.img} className='product-image' />
                                <Card.Body>
                                    <Link style={{ textDecoration: 'none' }} to={`/user/product/detail/${data.id}`}>
                                        <Card.Title style={{ color: '#F74D4D', fontSize: '18px', fontWeight: '700' }}>{data.name}</Card.Title>
                                    </Link>
                                    <p className='product-card-text'>Rp. {data.price}</p>
                                    <p className='product-card-text'>Stock: {data.stock}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Product;