
import ShopActionTypes from './shop.types';

const INITIAL_STAE = {
    collections: null
};

const shopReducer = (state = INITIAL_STAE, action) => {
    switch(action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state
    }
};


export default shopReducer;