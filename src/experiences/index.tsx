import { Pwc } from './pwc';
import { Experience, ExperienceName } from '../types/experience';
import { Macquarie } from './macquarie';
import { Microsoft } from './microsoft';

const experiencesOrder = [
  Pwc,
  Macquarie,
  Microsoft,
];

export const experiences: {[key in ExperienceName as key]: Experience} = experiencesOrder.reduce((a, exp, idx) => ({
  ...a,
  [exp.id]: {
    ...exp,
    pos: idx + 1,
  },
}), {} as {[key in ExperienceName as key]: Experience});
