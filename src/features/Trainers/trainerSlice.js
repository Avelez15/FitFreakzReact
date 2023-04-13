import { TRAINERS } from "../../app/shared/TRAINERS";

export const selectAllTrainers = () => {
    return TRAINERS;
}

export const selectRandomTrainer = () => {
    return TRAINERS[Math.floor(TRAINERS.length*Math.random())];
};