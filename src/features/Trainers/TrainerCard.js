import { Card,CardImg,CardImgOverlay,CardTitle } from "reactstrap";

const TrainerCard = (props) =>{
    return(
        <Card>
            <CardImg width = '100%' src={props.trainer.image} alt={props.trainer.name}/>
            <CardImgOverlay>
            <CardTitle>{props.trainer.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

export default TrainerCard;