import React from 'react';
import PwcLogo from '../assets/experiences/pwc.svg';
import PwcBadge from '../assets/experiences/pwc-badge.png';
import { Experience } from '../types/experience';

export const Pwc: Experience = {
  id: 'pwc',
  name: 'PricewaterhouseCoopers (PwC) Australia',
  role: 'Indirect Tax Technology Intern',
  startDate: new Date('2021-11-01'),
  endDate: new Date('2022-02-20'),
  stack: ['office'],
  color: '#eb8c00',
  logo: PwcLogo,
  badge: PwcBadge,
  description: (
    <>
      <ul>
        <li>
          Led a team of 6 interns in a competition, achieving a top 4 of 16 teams for our app’s UX/UI by presenting our design decisions in front of a panel of judges in OzHarvest.
        </li>
        <li>
          Collaborated with other associates preparing tax documentation for clients, ensuring the accuracy of documentation for 20 clients and completing their tax filing.
        </li>
        <li>
          Utilized Excel macros and regex to analyse customer relationship data for over 200 customers, identifying insights for decision-making for associates.
        </li>
      </ul>
    </>
  ),
};
