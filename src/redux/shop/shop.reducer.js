import SHOP_DATA from './shop.data';


const INITIAL_STAE = {
    collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STAE, action) => {
    switch(action.type) {
        default:
            return state
    }
};


export default shopReducer;