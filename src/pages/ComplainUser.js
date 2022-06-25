import { Form, Row, Col, Card } from 'react-bootstrap'

function ComplainUser() {
  return (
    <div className="complain-container">
      <div className='row'>
      <div className="col-md-4">
        <div className="messages-box">
          <Card className='mb-2 complain-card'>
            <Row>
              <Col sm={3}>
                <img src='http://pm1.narvii.com/7232/f68a08a5a03514a61ee1a185120717c803faf199r1-750-1060v2_uhq.jpg' alt="" className="img-complain" />
              </Col>
              <Col sm={5}>
                <p className='message-text' style={{ marginTop: '5px' }}>Name</p>
                <p className='message-text' style={{ fontStyle: 'italic'}}>Message</p>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
      <div className='col-md-8'>
        <div className='chat-box align-items-end'>
          <Form.Group style={{width: '100%'}}>
            <Form.Control type="text" placeholder="Send message"></Form.Control>
          </Form.Group>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ComplainUser;