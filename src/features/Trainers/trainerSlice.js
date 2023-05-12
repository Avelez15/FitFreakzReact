import { TRAINERS } from "../../app/shared/TRAINERS";

export const selectAllTrainers = () => {
    return TRAINERS;
};

export const selectTrainerById = (id) => {
    return TRAINERS.find((trainers) => trainers.id === id);
};

export const selectFeaturedTrainer = () => {
    return TRAINERS.find((trainer) => trainer.featured);
};