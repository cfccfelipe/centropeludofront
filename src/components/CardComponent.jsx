const CardComponent = ({ title, img, about, price, AgregarCarrito }) => {
	return (
		<div className='card col'>
			<img src={img} className='card-img-top' alt='Imagen del producto' />
			<h5 className='card-title'>{title}</h5>
			<div className='card-body'>
				<p className='card-text-sm'>{about}</p>
				<p> $ {price}</p>
				<button
					className='btn btn-primary'
					onClick={() => {
						AgregarCarrito(title);
					}}
				>
					Agregar
				</button>
			</div>
		</div>
	);
};
export default CardComponent;
