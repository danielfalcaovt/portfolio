import type { TechnologyData } from "../AboutMeData";
import { t } from "i18next";

export interface Project {
    id: number
    name: string;
    technologies: TechnologyData[];
    image: string;
    description: string;
    type: string;
    details: string;
    deploy?: string;
    github?: string;
    video?: string;
}

// Helper para criar dados de tecnologia de forma consistente
const tech = (name: string, imgSrc: string, style?: object): TechnologyData => ({ name, imgSrc, style });

const technologiesMap = {
    typescript: tech("TypeScript", "./tech/ts.png"),
    mysql: tech("MySQL", "./tech/mysql.png"),
    react: tech("React", "./tech/react.png", { padding: 4 }),
    nodejs: tech("Node.js", "./tech/nodejs.png"),
    sqlserver: tech("SQL Server", "./tech/sqlserver.png"),
    nestjs: tech("NestJS", "./tech/nestjs.png"),
    postgresql: tech("PostgreSQL", "./tech/pg.png"),
    jest: tech("Jest", "./tech/jest.png"),
    docker: tech("Docker", "./tech/docker.png"),
    javascript: tech("JavaScript", "./tech/js.png"),
};

export const PortfolioData: Project[] = [
    {
        id: 0,
        name: t("portfolio.project0.name"), // Fila de Atendimento
        technologies: [
            technologiesMap.typescript,
            technologiesMap.mysql,
            technologiesMap.react,
            technologiesMap.nodejs
        ],
        image: "/images/project6.jpeg",
        description: t("portfolio.project0.description"),
        type: "Website, API e Microsserviço",
        details: t("portfolio.project0.details"),
    },
    {
        id: 1,
        name: t("portfolio.project1.name"), // TransiScale
        technologies: [
            technologiesMap.nestjs,
            technologiesMap.postgresql,
            technologiesMap.react,
        ],
        image: "/images/project1.webp",
        description: t("portfolio.project1.description"),
        type: "API",
        details: t("portfolio.project1.details"),
        github: "https://github.com/Debug-Heroes/hackacont-transiscale-front",
        video: "https://youtu.be/gc0rbUS6ECk",
    },
    {
        id:2,

        name: t("portfolio.project2.name"), // GerenciaBook
        technologies: [
            technologiesMap.typescript,
            technologiesMap.nodejs,
            technologiesMap.postgresql,
            technologiesMap.react,
            technologiesMap.jest,
            technologiesMap.docker,
        ],
        image: "/images/project4.webp",
        description: t("portfolio.project2.description"),
        type: "API",
        details: t("portfolio.project2.details"),
        github: "https://github.com/danielfalcaovt/GerenciaBook-UI",
    },
    {
        id:4,

        name: t("portfolio.project4.name"), // MY BOOKSHELF
        technologies: [
            technologiesMap.javascript,
            technologiesMap.react,
        ],
        image: "/images/project2.webp",
        description: t("portfolio.project4.description"),
        type: "Website",
        details: t("portfolio.project4.details"),
        github: "https://github.com/danielfalcaovt/my-bookshelf",
        deploy: "https://minha-bookshelf.vercel.app/",
    },
    {
        id: 5,

        name: t("portfolio.project5.name"), // ALX SONORIZAÇÃO
        technologies: [
            technologiesMap.typescript,
            technologiesMap.react,
        ],
        image: "/images/project5.webp",
        description: t("portfolio.project5.description"),
        type: "Website",
        details: t("portfolio.project5.details"),
        deploy: "https://alxsonorizacao.vercel.app",
    },
];