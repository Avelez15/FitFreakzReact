import { TRAINERS } from "../../app/shared/TRAINERS";
import {Col,Row} from 'reactstrap';
import TrainerCard from "./TrainerCard";

const TrainersList = () => {
    return(
        <Row className="ms-auto">
            {TRAINERS.map((trainer) => {
                return (
                    <Col md='5' className='m-4' key={trainer.id}>
                        <TrainerCard trainer={trainer} />
                    </Col>
                );
            })}
        </Row>
    )
}

export default TrainersList;