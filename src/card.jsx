import ProfilePic from './assets/perfilAri.png';
import propTypes from 'prop-types';
function Card(props) {
	return (
		<>
			<div className="card">
				<h1 className="card__title">Hi!</h1>
				<h2 className="name">My name is {props.name || 'Unknown'}</h2>
				<h3 className="card__description">What the fuck are you looking at?</h3>
				<button className="card__button">Bite me!</button>
			</div>
		</>
	);
}
Card.propTypes = {
	name: propTypes.string,
};
Card.defaultProps = {
	name: 'Guest',
};
export default Card;
