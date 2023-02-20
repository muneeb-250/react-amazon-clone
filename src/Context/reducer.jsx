export const initialState = {
    basket: [],
}

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return { ...state, basket: [...state.basket, action.item] };
        case 'REMOVE_FROM_BASKET':
            const updatedBasket = state.basket.filter(item => item.id !== action.id);;
            return { ...state, basket: updatedBasket }
        default:
            return state;
    }
}

export default reducer;