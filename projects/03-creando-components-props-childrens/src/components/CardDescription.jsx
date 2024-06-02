import PropTypes from 'prop-types';
import './CardDescription.css'; // Crea un archivo CSS si necesitas estilos específicos

const CardDescription = ({ text }) => {
    return <p className="card-description">{text}</p>;
}

CardDescription.propTypes = {
    text: PropTypes.string.isRequired
};

export default CardDescription;