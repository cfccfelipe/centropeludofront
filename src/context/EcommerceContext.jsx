import { createContext, useState } from 'react';

export const EcommerceContext = createContext();

export const EcommerceProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [carrito, setCarrito] = useState([]);
	const api = 'https://api.mercadolibre.com/sites/MLA/search?q=';
	async function fetchData(searchQuery) {
		const data = await fetch(api + searchQuery);
		const response = await data.json();
		//Se monta
		setProducts(response.results);
		return response;
	}
	return (
		<EcommerceContext.Provider
			value={{
				products,
				carrito,
				setCarrito,
				fetchData,
				setProducts
			}}
		>
			{children}
		</EcommerceContext.Provider>
	);
};
