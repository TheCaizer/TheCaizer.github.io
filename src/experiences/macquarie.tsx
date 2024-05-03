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
  stack: ['c', 'c++', 'python', 'java', 'spring boot', 'sql', 'bash', 'gcp', 'git', 'kubernetes', 'docker','jira', 'confluence'],
  color: '#04B888',
  logo: MacquarieLogo,
  badge: MacquarieBadge,
  description: (
    <>
      <ul>
        <li>
          Improved the reliability and accuracy of curve data in the Macquarie Trading System by an average of 15% by developing a curve derivation class that minimises noise in C++.
        </li>
        <li>
          Implemented an automated functionality in C++ testing all mappings in the trading system eliminating a 1-hour manual process, and reducing testing time.
        </li>
        <li>
          Identified and decommissioned 15 obsolete databases, resulting in annual savings of $50,000; By analysis of usage and relevance of databases using SQL during a platform migration.
        </li>
        <li>
          Engineered Java APIs for intent layer using agile methodology, achieving a 20% decrease in customer processing time for home loan applications, increasing retention rates.
        </li>
        <li>
          Developed over 50+ Java tests using JUnit and Cucumber to test API functionality and identify bugs, resulting in more robust and error-free application performance.
        </li>
      </ul>
    </>
  ),
};
