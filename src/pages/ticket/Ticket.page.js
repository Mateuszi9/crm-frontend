import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import tickets from '../../assets/data/dummy-tickets.json';
import { MessageHistory } from '../../components/message-history/MessageHistory.comp';
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.comp';


const ticket = tickets[0]

export const Ticket = () => {

    const [message, setMessage] = useState('');

    useEffect(() => {}, [message]);


    const handleOnchange = (e) => {
        setMessage(e.target.value);     
    };

    const handleOnSubmit = () => {
        alert('From submited!');
    };


  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="Ticket" />
            </Col>
        </Row>
        <Row>
            <Col className='text-weight-bolder text-secondary'>
                <div className='Subject'>Subject: {ticket.subject}</div>
                <div className='Ticket Open'>Date: {ticket.addedAt}</div>
                <div className='Status'>Detail: {ticket.status}</div>
            </Col>
            <Col className='text-right'>
                <Button variant="outline-info" > Close ticket </Button>
            </Col>
        </Row>
        <Row className='mt-4' >
            <Col>
            <MessageHistory msg={ticket.history}/>
            </Col>
        </Row>
        <hr />

        <Row className='mt-4' >
            <Col>
                <UpdateTicket msg={message}  
                handleOnchange={handleOnchange}
                handleOnSubmit={handleOnSubmit}
                />
            </Col>
        </Row>


        
    </Container>
  )
}
