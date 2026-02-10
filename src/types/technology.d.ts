export type Technology = {
    name: TechnologyName,
    colors: TechnologyColors,
    link: string,
};

export type TechnologyColors = [string, string, string, string];

export type TechnologyName = 'c'
                            | 'c++'
                            | 'python'
                            | 'c#'

                            | 'java'
                            | 'spring boot'

                            | 'html'
                            | 'css'
                            | 'javascript'
                            | 'typescript'
                            | 'react'
                            | 'node'

                            | 'bash'

                            | 'gcp'

                            | 'docker'
                            | 'kubernetes'

                            | 'sql'
                            
                            | 'jira'
                            | 'confluence'
                            
                            | 'git'
                            
                            | 'office';
