import { Container, Row, Col, Button } from 'reactstrap';
import TrainerDetail from '../features/Trainers/TrainerDetail';
import TrainersList from '../features/Trainers/TrainersList';
import { selectRandomTrainer } from '../features/Trainers/trainerSlice';


const TrainersDirectoryPage = () => {
    let selectedTrainer = selectRandomTrainer();

    const toggleTrainer = () => {
        selectedTrainer = selectRandomTrainer();
    }


    return (
        <Container>
            <Button onClick={() => toggleTrainer()}>
                Select Random Trainer
            </Button>
            <Row>
                <Col sm='5' md='7'>
                    <TrainersList />
                </Col>
                <Col sm='7' md='5'>
                    <TrainerDetail trainer={selectedTrainer} />
                </Col>
            </Row>
        </Container>
    );
};

export default TrainersDirectoryPage;