import { Container, Table, Dropdown, Button, Row, Col, ProgressBar } from 'react-bootstrap';

const User = ({ data }) => {
    return (
            <Container id="user">
                <div className="heading d-flex">Users<span className="company-num">12</span></div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>
                                <Dropdown>
                                    <Dropdown.Toggle className="user-dropdown">
                                        NAME
                                    </Dropdown.Toggle>
                                </Dropdown>
                            </th>
                            <th>
                                <Button className="user-dropdown">   USERS </Button>
                            </th>
                            <th>
                                <Dropdown>
                                    <Dropdown.Toggle className="user-dropdown">
                                        ROLE
                                    </Dropdown.Toggle>
                                </Dropdown>
                            </th>
                            <th>
                                <Button className="user-dropdown"> PHONE </Button>
                            </th>
                            <th>
                                <Dropdown>
                                    <Dropdown.Toggle className="user-dropdown">
                                        EXPIRE DATE
                                    </Dropdown.Toggle>
                                </Dropdown>
                            </th>
                            <th>
                                <Dropdown>
                                    <Dropdown.Toggle className="user-dropdown">
                                        STATUS
                                    </Dropdown.Toggle>
                                </Dropdown>
                            </th>
                            <th>
                                <Button className="user-dropdown"> WATERFALL </Button>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((data,key) => (
                            <tr>
                                <td key={key}>
                                    <Row>
                                        <Col md={2}>
                                            <img className="user-img" src={data.img} alt="user-img" width="35px" height="35px" />
                                        </Col>
                                        <Col>
                                            {data.name}
                                            <br></br>
                                            <p className="user-mail">{data.mail}</p>
                                        </Col>
                                    </Row>
                                </td>
                                <td><svg style={{ marginRight: "5px" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(134, 134, 134)" class="bi bi-person" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>{data.user}</td>
                                <td>{data.role}</td>
                                <td>{data.phone}</td>
                                <td>{data.expire}</td>
                                <td>
                                    {(data.status === "Active") &&
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"-14px"}} width="35" height="35" fill="rgb(83,209,143)" class="bi bi-dot" viewBox="0 0 15 15">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                        </svg>
                                    }
                                     {(data.status === "Pending") &&
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"-14px"}} width="35" height="35" fill="rgb(239,160,84)" class="bi bi-dot" viewBox="0 0 15 15">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                        </svg>
                                    }
                                    {data.status}
                                </td>
                                <td>
                                    <ProgressBar className="user-progress" style={{width:"55%"}}>
                                        <ProgressBar style={{backgroundColor:"rgb(117,126,229)"}} now={30} key={1} />
                                        <ProgressBar style={{backgroundColor:"rgb(115,239,174)"}} now={30} key={2} />
                                        <ProgressBar style={{backgroundColor:"rgb(241,161,84)"}} now={55} key={3} />
                                        <ProgressBar style={{backgroundColor:"rgb(38,47,53)"}} now={10} key={4} />
                                    </ProgressBar>
                                </td>
                                <td><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(153, 154, 154)" class="bi bi-three-dots" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                </svg></td>
                            </tr>
                        ))}
                    </tbody>
                    
                </Table>
            </Container>
    )
}

export default User;