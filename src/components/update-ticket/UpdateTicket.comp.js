import React from 'react';
import PropTypes from 'prop-types';
import {Form, Button} from 'react-bootstrap';


export const UpdateTicket = ({msg, handleOnchange, handleOnSubmit}) => {
    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Label>Reply</Form.Label>
            <Form.Text>Please reply your message here or update the ticket</Form.Text>
            <Form.Control
            name=""
            as="textarea"
            row="5"
            value={msg}
            onChange={handleOnchange}
            
            />
            <div className='text-right mt-3 mb-3'>
                <Button variant="info" type="submit"> Reply </Button>
            </div>
            
        </Form>
    )
}

UpdateTicket.propTypes = {
    handleOnchange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired,
};