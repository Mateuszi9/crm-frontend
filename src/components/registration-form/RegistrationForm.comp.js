import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'


const initialState =
{
    name: '',
    email: '',
    company: '',
    address: '',
    phone: '',
    password: '',
    confirmPass: '',
};

const passVerificationError = {
    isLenthy: false,
    hasUpper: false,
    hasLower: false,
    hasNumber: false,
    hasSpclChr: false,
    confirmPass: false,
};


export const RegistrationForm = () => {

    const [newUser, setnewUser] = useState(initialState);
    const [passwordError, setpasswordError] = useState(passVerificationError);


    useEffect(() => { }, [newUser]);

    const handleOnchange = e => {
        const { name, value } = e.target;

        setnewUser({ ...newUser, [name]: value });



        if (name === "password") {
            const isLenthy = value.length > 8;
            const hasUpper = /[A-Z]/.test(value);
            const hasLower = /[a-z]/.test(value);
            const hasNumber = /[0-9]/.test(value);
            const hasSpclChr = /[@, #, $, %, &]/.test(value);

            setpasswordError({ ...passwordError, isLenthy, hasUpper, hasLower, hasNumber, hasSpclChr });
        }

        if (name === "confirmPass") {
            setpasswordError({
                ...passwordError,
                confirmPass: newUser.password === value,
            });
        }
    };

    const handleOnSubmit = (e) =>{
        e.preventDefault();


       
    };
    return (

        <Container>
            <Row>
                <Col>
                    <h1 className='text-info'>User Registration</h1>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group >
                            <Form.Label>Full name</Form.Label>
                            <Form.Control type="text" onChange={handleOnchange} name="name" value={newUser.name} placeholder="Your name" />

                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onChange={handleOnchange} name="email" value={newUser.email} placeholder="Enter email" />

                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Company name:</Form.Label>
                            <Form.Control type="text" onChange={handleOnchange} name="company" value={newUser.company} placeholder="Company name" />

                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" onChange={handleOnchange} name="address" value={newUser.address} placeholder="Full address" />

                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="number" onChange={handleOnchange} name="phone" value={newUser.phone} placeholder="Phone" />

                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={handleOnchange} name="password" value={newUser.password} placeholder="Password" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control type="password" onChange={handleOnchange} name="confirmPass" value={newUser.confirmPass} placeholder="Confirm password" />
                        </Form.Group>
                        <Form.Text>
                            {!passwordError.confirmPass && (
                                <div className='text-danger mb-3'>Password doesn't match!</div>
                            )}
                        </Form.Text>

                        <ul className='mb-4'>
                            <li className={passwordError.isLenthy ? "text-success" : "text-danger"}>Min 8 characters</li>
                            <li className={passwordError.hasUpper ? "text-success" : "text-danger"}>At least One Upper case</li>
                            <li className={passwordError.hasLower ? "text-success" : "text-danger"}>At least One Lower case</li>
                            <li className={passwordError.hasNumber ? "text-success" : "text-danger"}>At least one number</li>
                            <li className={passwordError.hasSpclChr ? "text-success" : "text-danger"}>At least on of the special characters i.e @ # $ % &</li>
                        </ul>


                        <Button variant="primary" type="submit" disabled={Object.values(passwordError).includes(false)}>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col className='py-4'>
                         Already have an acount?   
                         <a href='/'> Login Now</a>     
                </Col>
                </Row>                    
        </Container>

    );
};
