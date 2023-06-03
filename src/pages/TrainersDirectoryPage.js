import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TrainerDetail from '../features/Trainers/TrainerDetail';
import TrainersList from '../features/Trainers/TrainersList';
import { selectTrainerById } from '../features/Trainers/trainerSlice';
import SubHeader from '../components/SubHeader';


const TrainersDirectoryPage = () => {
    const [trainerId, setTrainerId] = useState(0);
    const selectedTrainer = selectTrainerById(trainerId);

    return (
        <Container>
            <SubHeader current='Directory' />
            <Row>
                <Col sm='5' md='7'>
                    <TrainersList setTrainerId={setTrainerId} />
                </Col>
                <Col sm='7' md='5'>
                    <TrainerDetail trainer={selectedTrainer} />
                </Col>
            </Row>
        </Container>
    );
};

export default TrainersDirectoryPage;