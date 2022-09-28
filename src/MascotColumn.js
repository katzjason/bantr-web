import React from 'react';
import './MascotColumn.css';

function MascotColumn(props) {
  return (
    <div className="mascot-column-container" >
      <img src={props.imageLink} />
      <h3>{props.title}</h3>
      <p className="feature-description">{props.description}</p>
    </div>

  );
}

export default MascotColumn;