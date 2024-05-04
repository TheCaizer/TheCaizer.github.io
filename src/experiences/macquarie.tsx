import React from 'react';
import MacquarieLogo from '../assets/experiences/macquarie.svg';
import MacquarieBadge from '../assets/experiences/macquarie-badge.png';
import { Experience } from '../types/experience';

export const Macquarie: Experience = {
  id: 'macquarie',
  name: 'Macquarie Group',
  role: 'Software Engineer L2',
  startDate: new Date('2023-02-15'),
  endDate: null,
  stack: ['c', 'c++', 'python', 'java', 'spring boot', 'sql', 'bash', 'gcp',
    'kubernetes', 'docker'],
  color: '#04B888',
  logo: MacquarieLogo,
  badge: MacquarieBadge,
  description: (
    <>
      <ul>
        <li>
          Improved the reliability of curve data in the Macquarie Trading System using C++.
        </li>
        <li>
          Implemented an automated functionality in C++ testing all mappings in the trading system
          reducing testing time.
        </li>
        <li>
          Identified and decommissioned 15 obsolete databases, by analysis of usage and relevance of
          databases using SQL.
        </li>
        <li>
          Engineered Java APIs for intent layer, reducing customer processing time for home loan
          applications, increasing retention rates.
        </li>
      </ul>
    </>
  ),
};
