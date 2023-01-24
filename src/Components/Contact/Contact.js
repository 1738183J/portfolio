import React,  { useRef }  from "react";
import emailjs from 'emailjs-com';
import "./Contact.scss";
import {ReactComponent as MailLogo} from '../../Images/144-envelope-mail-notification.svg';
import { Container, Row, Col } from "react-bootstrap";
import cv from '../../pdf/Cv.pdf';
import Instagram from '../../Images/instagram.png';
import Linkedin from '../../Images/linkedin.png';
import Facebook from '../../Images/facebook.png';

const Contact = props => {
    
    const form = useRef();

    function sendEmail(e){
        console.log('test');
        e.preventDefault();

        emailjs.sendForm("service_s6b4sio", "template_v1m6wzx", e.target, "OndW3tj310zUff-v_")
        .then(result => {
            console.log(result.text);
        }, (error)=> {
            console.log(error.text);
        });
    }
    return (
        <div className="contact-container" id="contactContainer">
        <Container>
            <Row className="contact-title">
                <h2 className="display-4 mb-4">Contact</h2>
                <MailLogo className="wiggle"/>
            </Row>
            <Row className="form-contact">
                <form className="form" ref={form} onSubmit={sendEmail} >
                        <Col className="form-group">
                            <h3>Name</h3>
                            <input className="form-control" id="name" name="name" placeholder="Name" type="text"/>
                            <h3> Email adress </h3>
                            <input className="form-control" id="email" name="email" placeholder="Email adress" type="email"/>
                            <h3>Message</h3>
                            <textarea className="form-control3" name="message" id ="message" placeholder="Message" rows ='5'></textarea>
                            <Col className="submit-form">
                                <button onSubmit = {sendEmail}  ref={form} className="submit-btn">Submit</button>
                            </Col>
                            <div className="media-btn">
                                <a className="btn-m" href="https://www.linkedin.com/in/jacob-godbout-4853a6220/"><img href="https://www.linkedin.com/in/jacob-godbout-4853a6220/" src = {Linkedin} className="reseau-icon" alt="media"/></a>
                                <a className="btn-m" href="https://www.instagram.com/jacobgodbout3/"><img src = {Instagram} className="reseau-icon" alt="media"/></a>
                                <a className="btn-m" href="https://www.facebook.com/jacob.godbout.98"><img src = {Facebook} className="reseau-icon" alt="media"/></a> 
                            </div>
                            <Col className="form-group2">
                                <a className="cv-btn" download={cv} href={cv}>Download my CV</a>
                            </Col>
                        </Col>
                </form>
            </Row>
        </Container>
        </div>
    );
};

export default Contact;
