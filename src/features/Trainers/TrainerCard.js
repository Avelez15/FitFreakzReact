import { Card,CardImg,CardImgOverlay,CardTitle } from "reactstrap";
import '../../index.css'



const TrainerCard = (props) =>{
    const titleStyle = {
        fontFamily: 'Proxima Nova',
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'red',
      };
    return(
        <Card>
            <CardImg width = '100%' src={props.trainer.image} alt={props.trainer.name}/>
            <CardImgOverlay>
            <CardTitle style={titleStyle}>{props.trainer.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}



export default TrainerCard;