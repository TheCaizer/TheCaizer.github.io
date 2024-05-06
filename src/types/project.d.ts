import { TechnologyName } from './technology';

export type Project = {
    id: number,
    name: ProjectName,
    category: string,
    participation: boolean,
    stack: TechnologyName[],
    color: string,
    img: string,
    sprite: string,
    link: string,
    description: JSX.Element[],
}

export type ProjectName = 'Protask'
                        | 'GloriaRomanus'
