const INIT_STATE = {
	cart: []
};

export const cartReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case 'PUSH PRODUCT':
			if (action.payload) {
				console.log(action.payload);
			}
			return {
				...state,
				cart: [...state.cart, action.payload]
			};
		default:
			return state;
	}
};
