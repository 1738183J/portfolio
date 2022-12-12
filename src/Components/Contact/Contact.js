import React from "react";
import "./Contact.scss";
import { Container, Row, Col } from "react-bootstrap";
import cv from '../../pdf/Cv.pdf';
import Instagram from '../../Images/instagram.png';
import Linkedin from '../../Images/linkedin.png';
import Facebook from '../../Images/facebook.png';

const Contact = props => {

    return (
        <Container>
            <Row className="mb-5 mt-3">
                <h2 className="display-4 mb-4">Contact</h2>
            </Row>
            <Row className="form-contact">
                <form className="contact_form w-100">
                        <Col className="form-group">
                            <h3>Name</h3>
                            <input className="form-control" id="name" name="name" placeholder="Name" type="text"/>
                            <h3> Email adress </h3>
                            <input className="form-control" id="email" name="email" placeholder="Email adress" type="email"/>
                            <h3>Message</h3>
                            <textarea className="form-control3" name="message" id ="message" placeholder="Message" rows ='5'></textarea>
                            <Col className="form-group">
                                <button className="submit-btn" type="submit">Submit</button>
                            </Col>
                            <div className="media-btn">
                                <a className="btn-m" href="https://www.linkedin.com/in/jacob-godbout-4853a6220/"><img href="https://www.linkedin.com/in/jacob-godbout-4853a6220/" src = {Linkedin} className="reseau-icon" alt=""/></a>
                                <a className="btn-m" href="https://www.instagram.com/jacobgodbout3/"><img src = {Instagram} className="reseau-icon" alt=""/></a>
                                <a className="btn-m" href="https://www.facebook.com/jacob.godbout.98"><img src = {Facebook} className="reseau-icon" alt=""/></a> 
                            </div>
                            <Col className="form-group2">
                                <a className="cv-btn" download={cv} href={cv}>Download my CV</a>
                            </Col>
                        </Col>
                </form>
            </Row>
        </Container>
    );
};

export default Contact;
