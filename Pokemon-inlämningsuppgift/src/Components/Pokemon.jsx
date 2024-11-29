import React from 'react';

function Pokemon({ data }) {
  return (
    <div className="pokemon">
      <h2>{data.name}</h2>
      <img src={data.sprites.front_default} alt={data.name} />
      <p>Type: {data.types.map((t) => t.type.name).join(', ')}</p>
      <p>Weight: {data.weight} Lbs</p>
      <p>Height: {data.height} Feet</p>
    </div>
  );
}

export default Pokemon;
