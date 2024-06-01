import './Card.css';

const Card = () => {
    const titulo = 'Ingeniero en Informática';
    const descripcion = 'Soy un desarrollador FullStack con conocimientos variados.';
    const imagen = 'https://unavatar.io/dark';
    const nombre = 'Francisco';
    const apellido = 'Juillet';
    const profesion = 'Docente';

    return (
        <div className="card">
            <div className="card-title"> {profesion} </div>
            <div className="card-photo">
                <img src={imagen} alt="Foto de Perfil" />
            </div>
            <div className="card-info">
                <h2>{nombre} {apellido}</h2>
                <p>{titulo}</p>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}

export default Card