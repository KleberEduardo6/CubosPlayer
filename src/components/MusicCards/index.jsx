import React from 'react';
import './styles.css';

export default function Card({ cover, title, description, onClick, url }) {

  return (
    <div className="card" onClick={() => onClick(url)}>
      <img src={cover} alt="Imagem da capa da música" />
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  );
}




