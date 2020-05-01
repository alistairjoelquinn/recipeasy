import { MEALS } from '../data/test-data';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
}

export default function mealsReducer(state = {initialState}, action) {
    return state;
};

