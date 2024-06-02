import './Card.css';
import CardDescription from './CardDescription.jsx';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Card = ({ children, title, photoUrl, name, last, profession, isLike }) => {
    const likeIconStyle = isLike ? { color: 'blue' } : { color: 'gray' };

    return (
        <div className="card">
            <div className="card-title">
                {profession}
                <div className="like-icon" style={likeIconStyle}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                </div>
            </div>
            <div className="card-photo">
                <img src={photoUrl} alt="Foto de Perfil" />
            </div>
            <div className="card-info">
                <h2>{name} {last}</h2>
                <p>{title}</p>
                <CardDescription text={children} />
            </div>
        </div>
    )
}

// indica que la prop debe ser una cadena de texto y es obligatoria
Card.propTypes = {
    title: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    children: PropTypes.node, // Cambiamos 'description' por 'children'
    isLike: PropTypes.bool
    //description: PropTypes.string.isRequired
};

export default Card