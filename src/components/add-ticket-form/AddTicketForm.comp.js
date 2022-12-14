import React from "react";
import {Jumbotron, Form, Row, Col, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './add-ticket-form.style.css'


export const AddTicketForm = ({handleOnSubmit, handleOnchange, frmDataErro, frmDt}) => {
    console.log(frmDt);
    
    return (
        <Jumbotron className="mt-3 add-new-ticket bg-light">
            
            
            <h1 className="text-info text-center">Add New Ticket</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>
                                    Subject
                                </Form.Label>
                                <Col sm={9}>
                                <Form.Control 
                                    name="subject" 
                                    //minLength="3"
                                    maxLength="100"
                                    value = {frmDt.subject}
                                    onChange={handleOnchange}
                                    placeholder="Subject" 
                                    required
                                />
                                <Form.Text className="text-danger">
                                    {frmDataErro.subject && "Subject is required!"}
                                </Form.Text>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>
                                    Date
                                </Form.Label>
                                <Col sm={9}>
                                <Form.Control 
                                    type="date"
                                    name="issueDate"
                                    value = {frmDt.issueDate}
                                    onChange={handleOnchange}
                                    required 
                                />
                                </Col>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>
                                    Details
                                </Form.Label>
                                <Form.Control 
                                    as = "textarea"
                                    name="details"
                                    rows="5"
                                    value = {frmDt.details}
                                    onChange={handleOnchange}
                                    required 
                                />
                            </Form.Group>

                            <Button type="submit" variant="info" block>Login</Button>


                        </Form>
        </Jumbotron>
    )
}

AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnchange: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired,
    frmDataErro: PropTypes.object.isRequired,
};