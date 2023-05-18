import { Col, Row, Card, CardBody, CardText, CardImg, CardTitle } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedTrainer } from '../Trainers/trainerSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import guyFlexing from '../../app/assets/img/guyFlexing.jpg';
import '../../styles.css'

const DisplayList = () => {
    const items = [selectFeaturedTrainer(), selectFeaturedPromotion()];

    return (
        <>
            <Row>
                <Col md={11}>
                    <Card className='custom-card'>
                        <CardImg src={guyFlexing} alt='a man flexing' />
                        <CardBody>
                            <CardTitle>Bring the results!</CardTitle>
                            <CardText>FitFreakz is dedicated to bringing you the results that you are searching for, whether it's gains at the gym or a step up in your athletic performance. FitFreakz guarantees results!</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                {items.map((item, idx) => (
                    <Col md className='m-1' key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default DisplayList;