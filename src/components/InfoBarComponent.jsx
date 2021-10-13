import { useState } from 'react';

const InfoBarComponent = ({ carrito, handleKeyUp, children }) => {
	return (
		<div className='bg-white py-4'>
			Los elementos en el carrito: {carrito.length}
			{children}
			<br />
			<input
				type='text'
				onInput={handleKeyUp}
				placeholder='Buscar por nombre'
			/>
		</div>
	);
};

export default InfoBarComponent;
