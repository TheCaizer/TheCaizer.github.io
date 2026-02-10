import React from 'react';
import MicrosoftLogo from '../assets/experiences/microsoft.svg';
import MicrosoftBadge from '../assets/experiences/microsoft-badge.png';
import { Experience } from '../types/experience';

export const Microsoft: Experience = {
  id: 'microsoft',
  name: 'Microsoft',
  role: 'Software Engineer',
  startDate: new Date('2026-02-16'),
  endDate: null,
  stack: ['c#'],
  color: '#CA5010',
  logo: MicrosoftLogo,
  badge: MicrosoftBadge,
  description: (
    <>
      <ul>
        <li>
          
        </li>
      </ul>
    </>
  ),
};
