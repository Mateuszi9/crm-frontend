import React, { useEffect, useState } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { shortText } from "../../utils/validation";


const initialFrmDt = {
    subject: "",
    issueDate: "",
    details: "",
};
const initialFrmError = {
    subject: false,
    issueDate: false,
    details: false,
};

export const AddTicket = () => {

    
    const [frmData, setFrmData] = useState(initialFrmDt);
    const [frmDataErro, setFrmDataErro] = useState(initialFrmError);
    
    useEffect(() => {}, [frmData, frmDataErro]);

    const handleOnchange = (e) => {
        
        const {name, value} = e.target;

        


        setFrmData({
            ...frmData,
            [name]: value,
        });

       
    };

    const handleOnSubmit = async (e) =>
    {
        e.preventDefault();
        
        setFrmDataErro(initialFrmError)

        const isSubjectValid = await shortText(frmData.subject)

        setFrmDataErro({
            ...initialFrmError,
            subject: !isSubjectValid,
        });

        console.log('Form submit request recieved', frmData);
    };

    return (
        <Container>
            <Row>
                <Col>
                <PageBreadcrumb page="New Ticket" />
                </Col>
            </Row>
            
            <Row>
                <Col>
                    <AddTicketForm 
                    handleOnchange={handleOnchange}
                    handleOnSubmit={handleOnSubmit}
                    frmDt = {frmData}
                    frmDataErro = {frmDataErro}
                    
                    />
                </Col>
            </Row>
        </Container>
    )
}