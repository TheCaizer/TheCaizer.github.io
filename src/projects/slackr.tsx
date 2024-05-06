import React from 'react';
import { Project } from '../types/project';
import SlackrLogo from '../assets/projects/slackr/slackr-logo.svg';
import SlackrSprite from '../assets/projects/slackr/slackr-sprite.png';

export const Slackr: Project = {
  id: 0,
  name: 'Slackr',
  category: 'Slack Clone',
  participation: true,
  stack: ['java', 'python'],
  color: '#1ED760',
  img: SlackrLogo,
  sprite: SlackrSprite,
  link: 'https://github.com/TheCaizer/Slackr',
  description: [
    <span key={0}>
      A copy of the messaging app Slack that were created with 3 other students to replicate,
      the functionality of the app
    </span>,
    <span key={1}>
      This is a project for the course COMP1531 where I create the Java backend and the Javascript
      frontend is created by the course admins.
    </span>,
    <span key={2}>
      Led a team of 4 to develop a backend system for a messaging app, implementing user
      authorisation, channel functionality, messaging API and storing user data using Python.
    </span>,
    <span key={3}>
      Integrated the backend and frontend for seamless communication between components and UI.
    </span>,
  ],
};
