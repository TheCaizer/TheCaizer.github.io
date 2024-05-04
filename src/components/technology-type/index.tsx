import React, { FC } from 'react';
import { Technology, TechnologyName } from '../../types/technology';
import Rectangle from './rectangle';

const technologies: {[key in TechnologyName as key]: Technology} = {
  'c': {
    name: 'c',
    colors: ['#5c6bc0', '#5c6bc0', '#283593', '#283593'],
    link: 'https://www.iso.org/standard/74528.html',
  },
  'c++': {
    name: 'c++',
    colors: ['#659AD2', '#659AD2', '#004482', '#004482'],
    link: 'https://isocpp.org/',
  },
  'python': {
    name: 'python',
    colors: ['#4B8BBE', '#4B8BBE', '#FFD43B', '#FFD43B'],
    link: 'https://www.python.org/',
  },
  'java': {
    name: 'java',
    colors: ['#f89820', '#f89820', '#5382a1', '#5382a1'],
    link: 'https://www.java.com/en/',
  },
  'spring boot': {
    name: 'spring boot',
    colors: ['#6db33f', '#6db33f', '#6db33f', '#6db33f'],
    link: 'https://spring.io/projects/spring-boot',
  },
  'html': {
    name: 'html',
    colors: ['#f06529', '#f06529', '#f06529', '#f06529'],
    link: 'https://html.spec.whatwg.org/',
  },
  'css': {
    name: 'css',
    colors: ['#2965f1', '#2965f1', '#2965f1', '#2965f1'],
    link: 'https://www.w3.org/TR/CSS/',
  },
  'javascript': {
    name: 'javascript',
    colors: ['#f0db4f', '#f0db4f', '#f0db4f', '#f0db4f'],
    link: 'https://www.javascript.com/',
  },
  'typescript': {
    name: 'typescript',
    colors: ['#007acc', '#007acc', '#007acc', '#007acc'],
    link: 'https://www.typescriptlang.org/',
  },
  'react': {
    name: 'react',
    colors: ['#61DBFB', '#61DBFB', '#61DBFB', '#61DBFB'],
    link: 'https://reactjs.org/',
  },
  'node': {
    name: 'node',
    colors: ['#417E38', '#417E38', '#000000', '#000000'],
    link: 'https://nodejs.org/en',
  },
  'sql': {
    name: 'sql',
    colors: ['#336791', '#336791', '#336791', '#336791'],
    link: 'https://en.wikipedia.org/wiki/SQL',
  },
  'bash': {
    name: 'bash',
    colors: ['#4DA825', '#4DA825', '#283037', '#283037'],
    link: 'https://www.gnu.org/software/bash/',
  },
  'gcp': {
    name: 'gcp',
    colors: ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'],
    link: 'https://cloud.google.com/',
  },
  'docker': {
    name: 'docker',
    colors: ['#0db7ed', '#0db7ed', '#0db7ed', '#0db7ed'],
    link: 'https://www.docker.com/',
  },
  'kubernetes': {
    name: 'kubernetes',
    colors: ['#326ce5', '#326ce5', '#326ce5', '#326ce5'],
    link: 'https://kubernetes.io/',
  },
  'jira': {
    name: 'jira',
    colors: ['#0052CC', '#0052CC', '#D8D8D8', '#D8D8D8'],
    link: 'https://www.atlassian.com/software/jira',
  },
  'confluence': {
    name: 'confluence',
    colors: ['#D8D8D8', '#D8D8D8', '#0052CC', '#0052CC'],
    link: 'https://www.atlassian.com/software/confluence',
  },
  'git': {
    name: 'git',
    colors: ['#f14e32', '#f14e32', '#f14e32', '#f14e32'],
    link: 'https://git-scm.com/',
  },
  'office': {
    name: 'office',
    colors: ['#F14F21', '#7EB900', '#00A3EE', '#FEB800'],
    link: 'https://www.microsoft.com/en-au/microsoft-365/microsoft-office',
  },
};

const TechnologyType: FC<{name: TechnologyName, small?: boolean}> = ({ name, small = false }) => (
  <a href={technologies[name].link} target="_blank" rel="noreferrer">
    <Rectangle technology={technologies[name]} small={small} />
  </a>
);

export default TechnologyType;
