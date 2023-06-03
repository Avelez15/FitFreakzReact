import { Container, Col, Row, Card, CardBody, CardHeader } from "reactstrap";
import Carousel from "../components/Carousel";
import SubHeader from "../components/SubHeader";

const AboutUsPage = () => {
    return (
        <Container>
            <SubHeader current='About Us' />
            <Carousel />
            <Row className='row-content'>
                <Col sm='6'>
                    <h3>Our Mission</h3>
                    <p>We at FitFreakz strive to give you the best possible training in the performance aspects that you demand. FitFreakz variety of professional trainers are dedicated to giving you the best possible training to guerantee that your performance leaps into the next level and the best part is that you have the option of where you want to train, whether it's at your local park, or at your house.</p>
                </Col>
                <Col sm='6'>
                    <Card>
                        <CardHeader className='bg-danger text-white'>Facts at a Glance</CardHeader>
                        <CardBody>
                            <dl className='row'>
                                <dt className='col-6'>Founded</dt>
                                <dd className='col-6'>January 4, 2018</dd>
                                <dt className='col-6'>No. of trainers in 2023</dt>
                                <dd className='col-6'>4</dd>
                                <dt className='col-6'>Employees</dt>
                                <dd className='col-6'>9</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Card>
                    <CardHeader
                        style={{
                            fontSize: '40px',
                            backgroundColor: 'red',
                            color: 'white',
                            padding: '20px',
                            borderRadius: '10px',
                            textAlign: 'center',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        Support your local business!
                    </CardHeader>
                </Card>
            </Row>
        </Container>
    );
};

export default AboutUsPage;