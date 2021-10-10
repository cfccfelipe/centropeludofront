import CardComponent from '../components/CardComponent';
import { useState } from 'react';

const ProductsContainer = () => {
	const [carrito, setCarrito] = useState([]);
	const AgregarCarrito = (name) => {
		carrito.push(name);
		setCarrito([...carrito]);
		console.log(carrito);
	};
	let price = 3800;
	return (
		<div className='container'>
			<div className='row text-center bg-info'>
				<h5>{carrito.length}</h5>
			</div>
			<div className='row text-center'>
				<CardComponent
					title={'Bola'}
					img={
						'https://th.bing.com/th/id/R.26363a586d47002591e92c6b9ae2c8cc?rik=l23QjHyZBL1aUQ&riu=http%3a%2f%2fwww.koaladoo.com%2f626-tm_thickbox_default%2fjuguete-para-perro-caucho-natural-redondo-porta-snacks.jpg&ehk=fsOC%2fJSBS2MMh0og5xvhUVVvneZWvkCANJEwZASsG%2bI%3d&risl=&pid=ImgRaw&r=0'
					}
					about={'Bola Roja con comida al interior'}
					price={price * 2}
					AgregarCarrito={AgregarCarrito}
				/>
				<CardComponent AgregarCarrito={AgregarCarrito} />
				<CardComponent />
				<CardComponent />
				<CardComponent />
			</div>
		</div>
	);
};
export default ProductsContainer;
