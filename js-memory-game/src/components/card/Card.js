import './Card.scss';

function Card({q, a, i}) {
    return (
        <li>
            <input type="checkbox" id={`item1-${i}`} />
            <label htmlFor={`item1-${i}`}>
                <div className="wrapper">
                    <span className="image">{a}</span>
                    <span className="back">{q}</span>
                </div>
            </label>
        </li>
    )
}

export default Card;
