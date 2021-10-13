const CardComponent = ({ product, AgregarCarrito }) => {
	return (
		<div className='card align-items-center col-4 '>
			<div>
				<img
					src={product.thumbnail}
					className='card-img-top'
					alt='Imagen del producto'
				/>
			</div>
			<div></div>

			<div className='card-body'>
				<p className='card-text'>
					{product.title.substring(0, 45)} <br />$ {parseInt(product.price)}
				</p>
				<p> </p>
				<button
					className='btn btn-primary '
					onClick={() => {
						AgregarCarrito({ product });
					}}
				>
					Agregar al carrito
				</button>
			</div>
		</div>
	);
};
export default CardComponent;
