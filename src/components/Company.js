import { Row, Col, Card, Container } from 'react-bootstrap';

const Company = ({ data }) => {
    return (
        <Container id="companies">
            <div className="heading d-flex">Companies<span className="company-num">32</span></div>
            <Row xs={1} md={4} className="g-4">
                {data.map((data,key) => (
                    <Col>
                        <Card>
                            <Card.Body key={key}>
                                <Row className="com-card-row">{data.heading}</Row>
                                <Row>
                                    <Col className="com-card-col" style={{ borderRightColor: 'rgb(213, 219, 223)', borderRightWidth: '2px', borderRightStyle: 'solid' }}>
                                        {data.total_users}
                                        <br></br>
                                        <span className="com-card-footer">Total users</span>
                                    </Col>
                                    <Col className="com-card-col">
                                        {data.tested}
                                        <br></br>
                                        <span className="com-card-footer">Tested</span>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

    )
}

export default Company;