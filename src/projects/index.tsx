import { Project, ProjectName } from '../types/project';
import {PortfolioDex} from './portfoliodex';
import { Protask } from './protask';
import { GloriaRomanus } from './gloria-romanus';
import { Slackr } from './slackr';

const projectsOrder = [
  PortfolioDex,
  Protask,
  GloriaRomanus,
  Slackr,
];

export const projects: {[key in ProjectName as key]: Project} = projectsOrder.reduce((a, proj, idx) => ({
  ...a,
  [proj.name]: {
    ...proj,
    id: idx + 1,
  },
}), {} as {[key in ProjectName as key]: Project});

