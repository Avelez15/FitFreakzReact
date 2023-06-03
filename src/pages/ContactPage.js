import { Row, Col, Container } from "reactstrap";
import SubHeader from "../components/SubHeader";

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Contact Us' />

            <Row className='row-content align-items-center'>
                <Col sm='4'>
                    <h5>Our Address</h5>
                    <address>
                        2332 Newpeak ave
                        <br />
                        Huston, TX 77449
                        <br />
                        U.S.A.
                    </address>
                </Col>
                <Col>
                    <a
                        role='button'
                        className='btn btn-link'
                        href='tel:+12065551234'
                    >
                        <i className='fa fa-phone' /> 1-281-555-1234
                    </a>
                    <br />
                    <a
                        role='button'
                        className='btn btn-link'
                        href='mailto:fakeemail@fakeemail.co'
                    >
                        <i className='fa fa-envelope-o' /> trainers@FitFreakz.com
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;