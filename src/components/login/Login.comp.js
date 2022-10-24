import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { PropTypes } from "prop-types";


export const LoginForm = ({ handleOnchange, handleOnSubmit, formSwitcher, email, pass }) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-info text-center">Client Login</h1>
                        <hr />
                        <Form autoComplete="off" onSubmit={handleOnSubmit}>
                            <Form.Group>
                                <Form.Label>
                                    Email Addres
                                </Form.Label>
                                <Form.Control type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleOnchange}
                                    placeholder="Enter Email"
                                    required
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>
                                    Password
                                </Form.Label>
                                <Form.Control type="password"
                                    name="password"
                                    value={pass}
                                    onChange={handleOnchange}
                                    placeholder="Enter password"
                                    required
                                />
                            </Form.Group>

                            <Button type="submit">Login</Button>


                        </Form>
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <a href="hgy" onClick={() => formSwitcher('reset')}>Forget Password?</a>
                    </Col>
                </Row>
                <Row className='py-4'>
                    <Col>
                        Are you new here?
                        <a href="/registration" >Registration Now</a>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

LoginForm.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,


}