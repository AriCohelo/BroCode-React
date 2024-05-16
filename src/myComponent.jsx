import React, { useState } from 'react';

function MyComponent() {
	const [food, setFood] = useState(['apple', 'orange', 'banana']);

	const handleAddFood = () => {
		const newFood = document.getElementById('fruitInput').value;
		document.getElementById('fruitInput').value = '';
		setFood((f) => [...f, newFood]);
	};
	const removeFood = (index) => {
		setFood(food.filter((_, i) => i !== index));
	};
	return (
		<div>
			<h1>List of Fruits</h1>
			<input id="fruitInput" placeholder="Add fruits" />
			<button onClick={handleAddFood}>Add Food</button>
			<ul>
				{food.map((fruit, index) => (
					<li key={index} onClick={() => removeFood(index)}>
						{fruit}
					</li>
				))}
			</ul>
		</div>
	);
}
export default MyComponent;
