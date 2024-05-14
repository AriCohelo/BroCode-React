function Button() {
	const handleClick = (e) => {
		console.log(e);
		e.target.textContent = 'uwuw';
	};
	return <button onClick={(e) => handleClick(e)}>Click Me 😃</button>;
}
export default Button;
