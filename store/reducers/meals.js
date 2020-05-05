import { MEALS } from '../../data/test-data';
import { TOGGLE_FAVOURITE, SET_FILTERS } from '../actions/meals';

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
                return {
                    ...state,
                    favouriteMeals: [
                        ...state.favouriteMeals,
                        state.meals.find(meal => {
                            return meal.id === action.mealId
                        })
                    ]
                }
            }
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const filteredMeals = state.meals.filter(meal => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false
                }
                if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false
                }
                if (appliedFilters.vegan && !meal.isVegan) {
                    return false
                }
                if (appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false
                }
                return true;
            });
            return {
                ...state,
                filteredMeals: filteredMeals
            };
        default: 
            return state;
    }
};

