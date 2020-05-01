import { MEALS } from '../../data/test-data';
import { TOGGLE_FAVOURITE } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
}

export default function mealsReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_FAVOURITE:
            const existingIndex = state.favouriteMeals.findIndex(meal => meal.id === action.mealId );
            if(existingIndex >= 0) {
                const updatedFav = [ ...state.favouriteMeals ];
                updatedFav.splice(existingIndex, 1);
                return {
                    ...state, 
                    favouriteMeals: updatedFav
                }
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return {
                    ...state,
                    favouriteMeals: {
                        ...favouriteMeals,
                        meal
                    }
                }
            }
        default: 
            return state;
    }
};

