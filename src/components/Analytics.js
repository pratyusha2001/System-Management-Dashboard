import { Container, Row, Col, Card, Dropdown, ListGroup, Button } from 'react-bootstrap';
import img from '../components/img/analytics-img.jpg'

const Analytics = () => {
    return (
            <Container id="analytics">
                <div className="heading d-flex">Analytics
                    <Dropdown>
                        <Dropdown.Toggle className="analytics-dropdown">
                            Basic preset   <span></span>
                        </Dropdown.Toggle>
                    </Dropdown>
                </div>
                <Row xs={1} md={4} className="g-4">
                    <Col>
                        <Card style={{ background: "rgb(241,242,245)" }}>
                            <Row className="analytics-card-header">
                                <Col md={2} xs={1}>
                                    <Container>
                                        <svg className="spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(118,128,232)" class="bi bi-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        </svg>
                                    </Container>
                                </Col>
                                <Col>
                                    Base Metrics
                                    <br></br>
                                    <span className="analytics-time">1AM-6PM</span>
                                </Col>
                            </Row>
                            <Card className="analytics-inner-card">
                                <ListGroup variant="flush">

                                    <ListGroup.Item>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z" />
                                        </svg>
                                        
                                        <span className="bm-num">23</span>
                                        <span className="bm-details">Critical</span>
                                    </ListGroup.Item>


                                    <ListGroup.Item>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-square" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                        </svg>
                                        <span className="bm-num">23</span><span className="bm-details">Notification</span>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
                                            <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                                        </svg>
                                        <span className="bm-num">3</span><span className="bm-details">To Review</span>
                                    </ListGroup.Item>

                                </ListGroup>
                            </Card>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ background: "rgb(241,242,245)" }}>
                            <Row className="analytics-card-header">
                                <Col md={2} xs={1}>
                                    <Container>
                                        <svg className="spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(118,128,232)" class="bi bi-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        </svg>
                                    </Container>
                                </Col>
                                <Col>
                                    Productivity
                                    <br></br>
                                    <span className="analytics-time">By Department</span>
                                </Col>
                            </Row>
                            <Card className="analytics-inner-card">
                                <img src={img} alt="graph-img" style={{ borderRadius: "15px" }} />
                            </Card>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card style={{ background: "rgb(241,242,245)" }}>
                            <Card.Body>
                                <Card.Text>
                                    <Row className="analytics-card-header">
                                        <Col className="analytics-heatmap" md={4}>
                                            HeatMap
                                            <div style={{ marginTop: "8px", marginBottom: "15px" }}>
                                                <span className="analytics-heatmap-num">346</span>
                                                <span>
                                                    <Button className="analytics-heatmap-perc">12%
                                                        <svg style={{ marginLeft: "5px" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z" />
                                                        </svg>
                                                    </Button>
                                                </span>
                                            </div>
                                            <p>
                                                <svg style={{ marginRight: "7px" }} xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="rgb(212,218,218)" class="bi bi-record-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>
                                                Normal
                                                <Button className="heatmap-btn" style={{ width: "51px", backgroundColor: "rgb(212,218,218)", border: "transparent", marginLeft: "55px" }}></Button>
                                            </p>
                                            <p>
                                                <svg style={{ marginRight: "7px" }} xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="rgb(171,179,243)" class="bi bi-record-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>
                                                Service Down
                                                <Button className="heatmap-btn" style={{ width: "38px", backgroundColor: "rgb(171,179,243)", border: "transparent", marginLeft: "15px" }}></Button>
                                            </p>
                                            <p>
                                                <svg style={{ marginRight: "7px" }} xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="rgb(116,126,236)" class="bi bi-record-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>
                                                Trouble
                                                <Button className="heatmap-btn" style={{ width: "27px", backgroundColor: "rgb(116,126,236)", border: "transparent", marginLeft: "58px" }}></Button>
                                            </p>
                                            <p>
                                                <svg style={{ marginRight: "7px" }} xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="rgb(43,51,57)" class="bi bi-record-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>
                                                Critical
                                                <Button className="heatmap-btn" style={{ width: "16px", backgroundColor: "rgb(43,51,57)", border: "transparent", marginLeft: "63px" }}></Button>
                                            </p>

                                        </Col>

                                        <Col md={8}>
                                            <Container>
                                                <Row className="g-1 heatmap-row" style={{ marginBottom: "7px" }}>
                                                    {Array.from({ length: 84 }).map((_, idx) => (
                                                        <Col md={1} sm={1} xs={1} className="heatmap-card">
                                                            <Card className="analytics-heatmap-card">
                                                                <Card.Body>
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Container>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
    )
}

export default Analytics;