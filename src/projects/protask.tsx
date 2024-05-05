import React from 'react';
import { Project } from '../types/project';
import ProtaskLogo from '../assets/projects/protask/protask-logo.svg';
import ProtaskSprite from '../assets/projects/protask/protask-sprite.png';

export const Protask: Project = {
  id: 0,
  name: 'Protask',
  category: 'Task Management',
  participation: true,
  stack: ['react', 'css', 'python', 'sql'],
  color: '#1ED760',
  img: ProtaskLogo,
  sprite: ProtaskSprite,
  link: 'https://github.com/TheCaizer/Protask',
  description: [
    <span key={0}>
      An online platfom that user connect with each other and assign task
      and projects to those people they connected with.
    </span>,
    <span key={1}>
      This is the Capstone project for my univeristy degree for the course COMP3900.
    </span>,
    <span key={2}>
      Collaborated with 3 students to develop a Python-Flask backend for a task management system,
      enabling users to search, post, and assign tasks to other users in their network.
    </span>,
    <span key={3}>
      Designed a fast, responsive web app with a seamless UX/UI using React.js and CSS.
    </span>,
    <span key={4}>
      Built a relational database with SQLAlchemy to store user data such as authorisation and tasks.
    </span>,
  ],
};
