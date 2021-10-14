import CardComponent from '../components/CardComponent';
import { useEffect, useContext } from 'react';
import InfoBarComponent from '../components/InfoBarComponent';
import { EcommerceContext } from '../context/EcommerceContext';
import { useParams } from 'react-router';

const ProductsContainer = () => {
	const { products, carrito, setCarrito, fetchData, setProducts } =
		useContext(EcommerceContext);
	const { busqueda } = useParams();
	const list = products;

	useEffect(() => {
		fetchData(busqueda);
		return () => {
			console.log('Se esta por morir');
		};
	}, [busqueda]);

	const AgregarCarrito = (product) => {
		carrito.push(product);
		setCarrito([...carrito]);
		console.log(carrito);
	};
	const handleKeyUp = (e) => {
		if (e.target.value === []) {
			setProducts(list);
		}
		const productsFilter = products.filter((element) => {
			if (element.title.toUpperCase().match(e.target.value.toUpperCase())) {
				return true;
			}
			return false;
		});
		setProducts(productsFilter);
	};

	return (
		<div className='container bg-warning text-center'>
			<InfoBarComponent carrito={carrito} handleKeyUp={handleKeyUp} />_
			<div className='row'>
				{products.map((element) => {
					return (
						<CardComponent product={element} AgregarCarrito={AgregarCarrito} />
					);
				})}
			</div>
		</div>
	);
};
export default ProductsContainer;
