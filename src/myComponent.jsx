import React, { useState } from 'react';

function MyComponent() {
	const [name, setName] = useState('');
	const [quantity, setQuantity] = useState(1);
	const [comment, setComment] = useState('');
	const [payment, setPayment] = useState('');
	const [shipping, setShipping] = useState('');

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleQuantity = (e) => {
		setQuantity(e.target.value);
	};

	const handleComment = (e) => {
		setComment(e.target.value);
	};
	const handlePayment = (e) => {
		setPayment(e.target.value);
	};
	const handleShipping = (e) => {
		setShipping(e.target.value);
	};
	return (
		<>
			<input value={name} onChange={handleNameChange} />
			<p>Name: {name}</p>
			<input value={quantity} onChange={handleQuantity} type="number" />
			<p>Quantity: {quantity}</p>
			<textarea value={comment} onChange={handleComment}></textarea>
			<p> Comment: {comment}</p>
			<select value={payment} onChange={handlePayment}>
				<option value="">Select an option</option>
				<option value="Visa">Visa</option>
				<option value="Mastercard">Mastercad</option>
				<option value="Paypal">Paypal</option>
			</select>
			<p>Payment method: {payment}</p>
			<label htmlFor="">
				<input
					type="radio"
					value="Pick up"
					checked={shipping === 'Pick up'}
					onChange={handleShipping}
				/>
				Pick up
			</label>
			<br />
			<label htmlFor="">
				<input
					type="radio"
					value="Delivery"
					checked={shipping === 'Delivery'}
					onChange={handleShipping}
				/>
				Delivery
			</label>
			<p>Shipping: {shipping}</p>
		</>
	);
}
export default MyComponent;
