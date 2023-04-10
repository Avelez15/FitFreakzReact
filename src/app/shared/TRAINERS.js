import ChristopherBasketBallTrainer from '../assets/img/ChristopherBasketballTrainer.jpg';
import JoshStrengthAndConditioning from '../assets/img/JoshStrengthAndConditioning.jpg';
import StephanieYogaCoach from '../assets/img/StephanieYogaCoach.jpg';

export const TRAINERS = [
    {
        id:0,
        name:'Christopher',
        Image:ChristopherBasketBallTrainer,
        specialties:'dribbling and shooting',
        featured:false,
        description:'An experienced basketball coach with knowledge in dribbling and shooting, Christoper is the man you want to contact if you are looking to step up your game'
    },
    {
        id:1,
        name:'Josh',
        image:JoshStrengthAndConditioning,
        specialties:'muscle and strength development',
        featured:true,
        description:'A specialist in the development of muscle and strength, Josh is the one you want if you want to get a new PR in the bench, or a new record lap time.'
    },
    {
        id:2,
        name:'Stephanie',
        image:StephanieYogaCoach,
        specialties:'relaxation and flexability',
        featured:false,
        description:'A master in the art of relaxation and flexability, Stephanie is the person you get in touch with if you want to improve your Yoga skills, flexability, or if you want to improve overall relaxation.'
    }
]