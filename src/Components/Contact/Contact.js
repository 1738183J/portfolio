import React from "react";
import "./Contact.scss";
import { Container, Row, Col } from "react-bootstrap";
import hero from '../../Images/hero.png';

const Contact = props => {

    return (
        <Container>
            <Row className="mb-5 mt-3">
              <Col lg="8">
                <h2 className="display-4 mb-4">
                    Contact
                </h2>
              </Col>  
            </Row>
            <Row lg = "7" className="d-flex align-items-center">
                <form className="contact_form w-100">
                    <Row>
                        <Col lg ='6' className="form-group">
                            <h3>
                             Name
                            </h3>
                            <input
                                className="form-control rounded-0"
                                id="name"
                                name="name"
                                placeholder="Name"
                                type="text"/>
                            <h3>
                             Email adress
                            </h3>
                            <input
                                className="form-control rounded-0" id="email" name="email" placeholder="Email adress" type="email"/>
                            <h3>
                             Message
                            </h3>
                            <textarea className="form-control" name="message" id ="message" placeholder="Message" rows ='5'>
                            </textarea>
                            </Col>
                    </Row>
                </form>

            </Row>
        </Container>
    );
};

export default Contact;
