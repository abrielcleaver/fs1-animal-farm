import React from 'react';
import './Main.css';
import AnimalList from '../AnimalList/AnimalList';
import bg from '../../assets/background-image.png';
export default function Main(props) {
  return (
    <main style={{ backgroundImage: `url(${bg})` }}>
      {props.animals.map((animal) => (
        <div key={animal.type}>
          <AnimalList {...animal} />
        </div>
      ))}
    </main>
  );
}