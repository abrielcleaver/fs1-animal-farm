// <AnimalList /> component should use a .map to loop through and render an <Animal /> component for each animal in the animals array passed to it from the parent.


import React from 'react';
import './AnimalList.css';

// {
//     name: 'Betsy the Cow',
//     type: 'cow',
//     says: 'Mooooooo!',
//     top: '200px',
//     left: '50%',
//   },

export default function AnimalList({ top, left, name, type, says }){
  return (
    <div className="animal" style={{ top: top, left: left }}>
      <img src={`${process.env.PUBLIC_URL}/animals/${type}.svg` } />
      <span className="name">{name}</span>
      <span className="saying">{says}</span>
    </div>
  );
}
