import type { MantineStyleProp } from "@mantine/core"

export interface TechnologyData {
    imgSrc?: string
    name: string
    style?: MantineStyleProp
    favorite?: boolean
}

export const technologies: TechnologyData[] = [
    {
        imgSrc: './tech/nodejs.png',
        name: 'Node.js',
        favorite: true
    },
    {
        imgSrc: './tech/ts.png',
        name: 'TypeScript',
    },
    {
        imgSrc: './tech/react.png',
        name: 'React',
        style: {
            padding: 3
        }
    },
    {
        imgSrc: './tech/pg.png',
        name: 'PostgreSQL',
    },
    {
        imgSrc: './tech/mysql.png',
        name: 'MySQL',
        style: {
            padding: 3
        }
    },
    {
        imgSrc: './tech/git.png',
        name: 'Git',
    },
    {
        imgSrc: './tech/docker.png',
        name: 'Docker',
    },
    {
        imgSrc: './tech/jest.png',
        name: 'Jest',
    },
    {
        imgSrc: './tech/redis.png',
        name: "Redis"
    },
    {
        imgSrc: './tech/nestjs.png',
        name: 'NestJS'
    }
]

export const extraTechnologies: TechnologyData[] = [
    {
        name: 'SCSS',
    },
    {
        name: 'Tailwind CSS',
    },
    {
        name: 'React Native',
    },
    {
        name: 'Mantine',
    },
    {
        name: 'MUI',
    },
    {
        name: 'C#',
    },
    {
        name: '.NET Framework',
    },
    {
        name: 'Prisma',
    }
]

export const deprecatedTechnologies: TechnologyData[] = [
    {
        name: 'ASP Clássico'
    },
    {
        name: 'jQuery',
    },
]