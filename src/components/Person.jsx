function Person(props) {
	const { firstName, lastName, img } = props;

	return (
		<div>
			<img src={img} alt="person img" />
			<h3>
				{firstName} {lastName}
			</h3>
		</div>
	);
}

export default Person;
