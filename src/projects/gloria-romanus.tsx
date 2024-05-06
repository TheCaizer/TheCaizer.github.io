import React from 'react';
import { Project } from '../types/project';
import GloriaRomanusLogo from '../assets/projects/gloria-romanus/gloria-romanus-logo.svg';
import GloriaRomanusSprite from '../assets/projects/gloria-romanus/gloria-romanus-sprite.png';

export const GloriaRomanus: Project = {
  id: 0,
  name: 'GloriaRomanus',
  category: 'Strategy Game',
  participation: true,
  stack: ['java'],
  color: '#1ED760',
  img: GloriaRomanusLogo,
  sprite: GloriaRomanusSprite,
  link: 'https://github.com/TheCaizer/COMP2511/tree/main/project',
  description: [
    <span key={0}>
      Created a turn-based strategy game in Java where 2 players
      as factions conquer provinces.
    </span>,
    <span key={1}>
      Collabarated with another student in the course COMP2511 to create this.
      This Course teache Object Oriented Programming and it's designs.
    </span>,
    <span key={2}>
      Used Object Oriented Paradigm to create classes in the backend, such as factions and mechanics.
    </span>,
    <span key={3}>
      Implemented the game{'\''}s logic, such as win condition, bot behaviour and game progression.
    </span>,
  ],
};
