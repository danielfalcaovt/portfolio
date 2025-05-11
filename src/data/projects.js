/*
  Todos os dados inseridos aqui são automaticamente
  renderizados no componente projects-carrosel.jsx
*/

// LIMITE DE CARACTERES PARA O CAMPO: DESCRIPTION

export const allProjects = [
  {
    id: 6,
    name: 'Fila de Atendimento',
    type: 'Website, API e Microsserviço',
    bg: 'project6.jpeg',
    technologies: ['typescript', 'mysql', 'react', 'nodejs', 'sqlserver'],
    description:
      'O Fila de Atendimento gerencia filas nas clínicas da empresa, permitindo transferências entre filas, destaque do cliente no atendimento e histórico com opção de remarcação. Um microserviço sincroniza dados e envia o histórico diário à empresa.'
  },
  {
    id: 1,
    name: 'TransiScale',
    type: 'API',
    bg: 'project1.webp',
    github: 'https://github.com/Debug-Heroes/hackacont-transiscale-front',
    video: 'https://youtu.be/gc0rbUS6ECk',
    technologies: ['nestjs', 'postgresql', 'react'],
    description:
      'Ferramenta que auxilia gestores na transição de escalas 6x1 para 4x3, simulando impactos operacionais e sugerindo ajustes automáticos nos turnos. O sistema considera carga horária, folgas obrigatórias e leis trabalhistas, garantindo eficiência, bem-estar dos colaboradores e continuidade das operações.'
  },
  {
    id: 2,
    name: 'GerenciaBook',
    type: 'API',
    bg: 'project4.webp',
    github: 'https://github.com/danielfalcaovt/GerenciaBook-UI',
    technologies: [
      'typescript',
      'nodejs',
      'postgresql',
      'react',
      'jest',
      'docker'
    ],
    description:
      'Bem-vindo ao projeto Gerenciador de Empréstimo de Livros! Este é um sistema projetado para facilitar o gerenciamento de empréstimos de livros. O sistema permite autenticação de usuários, registro e operações CRUD (Criar, Ler, Atualizar, Excluir) em relação aos livros.'
  },
  {
    id: 3,
    name: 'Task Manager',
    type: 'API',
    bg: 'project3.webp',
    github: 'https://github.com/danielfalcaovt/TaskManager',
    technologies: ['react', 'postgresql', 'typescript'],
    description:
      'O TaskPilot é um app de organização pessoal que ajuda a gerenciar tarefas, compromissos e notas. Ele oferece calendário, notificações de lembretes, frases motivacionais diárias e personalização de configurações, visando aumentar a produtividade e facilitar o controle das responsabilidades.'
  },
  {
    id: 4,
    name: 'MY BOOKSHELF',
    type: 'Website',
    bg: 'project2.webp',
    github: 'https://github.com/danielfalcaovt/my-bookshelf',
    deploy: 'https://minha-bookshelf.vercel.app/',
    technologies: ['javascript', 'react'],
    description:
      'Aqui estão todos os livros que li em todos os meus dias na Terra e o que eu pensei sobre eles. Apenas lembre-se de que eu não sou um avaliador profissional de livros. Sou apenas um desenvolvedor e um cara curioso.'
  },
  {
    id: 5,
    name: 'ALX SONORIZAÇÃO',
    type: 'Website',
    bg: 'project5.webp',
    deploy: 'https://alxsonorizacao.vercel.app',
    technologies: ['typescript', 'react'],
    description:
      'A ALX Sonorização oferece serviços completos de sonorização, DJ e iluminação para eventos, garantindo alta qualidade de som, mixagens exclusivas e iluminação impressionante, tudo personalizado para tornar seu evento inesquecível.'
  }
]
