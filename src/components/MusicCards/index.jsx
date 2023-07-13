import './styles.css';      

export default function cards ( {cover, title, description, url}){
   
    return (      
            <div className='card'>
                <img src={cover} alt="Imagem da capa da musica" />
                <strong>{title}</strong>
                <p>{description}</p>
            </div>
    )
}   