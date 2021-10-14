export const addProductCart = (product) => {
	return {
		type: 'PUSH PRODUCT',
		payload: product
	};
};
