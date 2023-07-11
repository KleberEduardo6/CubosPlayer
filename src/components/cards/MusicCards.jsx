import './styles.css';

export default function cards ( {cover, title, description}){
    return (      
            <div className='card'>
                <img src={cover} alt="Imagem da capa da musica" />
                <strong>{title}</strong>
                <p>{description}</p>
            </div>
    )
}   