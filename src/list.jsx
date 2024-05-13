function List(props) {
	const category = props.category;
	const vidaItems = props.items;
	const listedvida = vidaItems.map((elm) => (
		<li key={elm.id}>{`${elm.item}: ${elm.cantidad}`}</li>
	));
	return (
		<>
			<h2>{category}</h2>
			<ul className="list">{listedvida}</ul>
		</>
	);
}
export default List;
