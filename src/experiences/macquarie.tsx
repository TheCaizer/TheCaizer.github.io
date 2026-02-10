import React from 'react';
import MacquarieLogo from '../assets/experiences/macquarie.svg';
import MacquarieBadge from '../assets/experiences/macquarie-badge.png';
import { Experience } from '../types/experience';

export const Macquarie: Experience = {
  id: 'macquarie',
  name: 'Macquarie Group',
  role: 'Software Engineer',
  startDate: new Date('2023-02-15'),
  endDate: new Date('2026-02-15'),
  stack: ['c', 'c++', 'python', 'java', 'spring boot', 'sql', 'bash', 'gcp',
    'kubernetes', 'docker'],
  color: '#323232',
  logo: MacquarieLogo,
  badge: MacquarieBadge,
  description: (
    <>
      <ul>
        <li>
          Improved the reliability of curve data in the Macquarie Trading System using C++.
        </li>
        <li>
          Implemented automated functionality in C++ testing all mappings in the trading system.
        </li>
        <li>
          Identified and decommissioned 15 obsolete databases, by analysis of usage and relevance of
          databases using SQL.
        </li>
        <li>
          Engineered Java APIs for intent layer, reducing customer processing time for home loan
          and increasing retention rates.
        </li>
      </ul>
    </>
  ),
};
