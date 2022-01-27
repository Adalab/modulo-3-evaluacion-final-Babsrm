import Char from './Char';

function CharList(props) {
	const charsElements = props.chars.map((char) => {
		return (
			<li className="li-cards" key={char.id}>
				<Char char={char} />
			</li>
		);
	});

	return (
		<section>
			<ul className="ul-cards">
				{charsElements.length > 0
					? charsElements
					: 'No se encuentra el personaje'}
			</ul>
		</section>
	);
}
export default CharList;
