import React from 'react';
import { Project } from '../types/project';
import PortfolioDexLogo from '../assets/projects/portfoliodex/portfoliodex-logo.svg';
import PortfolioDexSprite from '../assets/projects/portfoliodex/portfoliodex-sprite.png';

export const PortfolioDex: Project = {
  id: 0,
  name: 'PortfolioDex',
  category: 'Pokedex Portfolio',
  participation: true,
  stack: ['typescript', 'css', 'react', 'node'],
  color: '#1ED760',
  img: PortfolioDexLogo,
  sprite: PortfolioDexSprite,
  link: 'https://thecaizer.github.io/',
  description: [
    <span key={0}>
      A Pokemon themed portfolio made using typescript to showcase my projects and my experiences. 
    </span>,
    <span key={1}>
      Personally created the sprite assets for the website to replicate the logo's obtained from the internet.
    </span>,
    <span key={2}>
      Click on the link to find out what a recursion is.
    </span>,
  ],
};
