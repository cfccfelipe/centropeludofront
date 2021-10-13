import { useContext } from 'react';
import { EcommerceContext } from '../context/EcommerceContext';

const HomeContainer = () => {
	const { carrito } = useContext(EcommerceContext);
	return <h1> Hola tienes esta cantidad de productos: {carrito.length}</h1>;
};
export default HomeContainer;
