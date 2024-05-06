import { Project, ProjectName } from '../types/project';
import { Protask } from './protask';
import { GloriaRomanus } from './gloria-romanus';

const projectsOrder = [
  Protask,
  GloriaRomanus,
];

export const projects: {[key in ProjectName as key]: Project} = projectsOrder.reduce((a, proj, idx) => ({
  ...a,
  [proj.name]: {
    ...proj,
    id: idx + 1,
  },
}), {} as {[key in ProjectName as key]: Project});

