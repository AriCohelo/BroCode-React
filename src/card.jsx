import ProfilePic from './assets/perfilAri.png';
function Card() {
	return (
		<div className="card">
			<img className="card__image" src={ProfilePic} alt="profile photo" />
			<h2 className="card__title">Ari Code</h2>
			<p className="card__text">What the fuck do you care</p>
		</div>
	);
}
export default Card;
