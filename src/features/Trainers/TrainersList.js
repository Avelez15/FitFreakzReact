import { Col, Row } from 'reactstrap';
import TrainerCard from "./TrainerCard";
import { selectAllTrainers } from "./trainerSlice";

const TrainersList = ({ setTrainerId }) => {
    const trainers = selectAllTrainers();

    return (
        <Row className="ms-auto">
            {trainers.map((trainer) => {
                return (
                    <Col md='5' className='m-4' key={trainer.id} onClick={(() => setTrainerId(trainer.id))}>
                        <TrainerCard trainer={trainer} />
                    </Col>
                );
            })}
        </Row>
    )
}

export default TrainersList;