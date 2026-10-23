export const githubUrl = "https://github.com/estudantekeynan-lgtm";
export const repoUrl = `${githubUrl}/logica_de_programacao2`;
export const email = "estudantekeynan@gmail.com";

export type Project = {
  id: string;
  title: string;
  module: "LIMA" | "PBE" | "BCD";
  category: string;
  description: string;
  tech: string[];
  path: string;
  learning: string[];
  image?: string;
  imageAlt?: string;
  filename?: string;
  preview?: string;
};

export const projects: Project[] = [
  {
    id: "smartcoffee",
    title: "SmartCoffee",
    module: "LIMA",
    category: "Front-end",
    description:
      "Site e cardápio de uma cafeteria, explorando estrutura semântica, identidade visual e estilização com HTML e CSS.",
    tech: ["HTML5", "CSS3", "Web Design"],
    path: "LIMA/aula12",
    image: "/images/smartcoffee.png",
    imageAlt: "Cardápio SmartCoffee presente no repositório de estudos",
    learning: [
      "Estruturação de páginas e navegação entre o site e o cardápio.",
      "Organização visual de conteúdo, imagens e estilos CSS.",
      "Uso de recursos visuais do projeto de cafeteria.",
    ],
  },
  {
    id: "nostalgia",
    title: "Nostalgia Play",
    module: "LIMA",
    category: "Front-end",
    description:
      "Uma viagem pelas animações e pelos heróis que marcaram gerações. Projeto de página temática com HTML e CSS.",
    tech: ["HTML5", "CSS3", "Layout"],
    path: "LIMA/Aula13-somativa",
    image: "/images/nostalgia.png",
    imageAlt: "Arte com elementos retro usada no projeto Nostalgia Play",
    learning: [
      "Composição de uma página temática com seções e navegação por âncoras.",
      "Estilização de títulos, imagens e conteúdos com CSS.",
      "Organização de clássicos, heróis e animações em uma narrativa visual.",
    ],
  },
  {
    id: "clinica",
    title: "Clínica médica",
    module: "BCD",
    category: "Banco de dados",
    description:
      "Estudo de modelagem conceitual e lógica e criação de tabelas para pacientes, médicos, medicamentos e agendamentos.",
    tech: ["SQL", "Modelagem", "brModelo"],
    path: "BCD/aula4",
    filename: "script_banco_de_dados_clinica.sql",
    preview:
      "CREATE DATABASE\n  Clinica_medica_Keynan;\n\n-- pacientes · doutores\n-- medicamentos · agendamento\n\nPRIMARY KEY (id)",
    learning: [
      "Representação de entidades e relacionamentos nos modelos conceitual e lógico.",
      "Definição de tabelas, chaves primárias e tipos de dados em SQL.",
      "Exploração de restrições como UNIQUE e DEFAULT.",
    ],
  },
  {
    id: "balanca",
    title: "Balança de peças",
    module: "PBE",
    category: "Back-end",
    description:
      "Aplicação de console que valida o peso de peças, trata entradas inválidas e informa a aprovação dentro do intervalo permitido.",
    tech: ["JavaScript", "Node.js", "Módulos"],
    path: "PBE/aulas_1-10/aula_7",
    filename: "funcoes_balanca.js",
    preview:
      "// validação de peso\nverificarPeso(peso);\n\n// intervalo: 100 a 500\n// aprovação ou erro\n\n// aprender com cada condição",
    learning: [
      "Validação de dados numéricos e pesos entre 100 e 500, inclusive.",
      "Separação da aplicação e das funções em módulos CommonJS.",
      "Entrada de dados com readline-sync e tratamento de exceções com try/catch.",
    ],
  },
  {
    id: "oficina-db",
    title: "Banco de dados de oficina",
    module: "BCD",
    category: "Banco de dados",
    description:
      "Modelagem de uma oficina com clientes, veículos, serviços, peças e ordens de serviço, acompanhada de um dicionário de dados.",
    tech: ["SQL", "brModelo", "Dicionário de dados"],
    path: "BCD/Aula6",
    filename: "oficina_Keynan.sql",
    preview:
      "CREATE DATABASE\n  Oficina_Keynan;\n\n-- clientes · veiculos\n-- servicos · pecas\n-- ordens_servico\n\n-- modelando relações",
    learning: [
      "Organização de entidades como clientes, veículos, marcas e modelos.",
      "Definição de campos para serviços, peças e pagamentos.",
      "Documentação das estruturas em um dicionário de dados.",
    ],
  },
  {
    id: "logistica",
    title: "Calculadora de logística",
    module: "PBE",
    category: "Back-end",
    description:
      "Exercício de console para calcular valores de frete e seguro e estimar prazo a partir da distância de uma entrega.",
    tech: ["JavaScript", "Node.js", "Funções"],
    path: "PBE/aulas_1-10/aula_5_sistemas/Logistica",
    filename: "calculadoraFrete.js",
    preview:
      "// entrada de dados\nproduto · distância · valor\n\n// cálculo de frete\ndistância * 2.10\n\n// lógica aplicada ao cotidiano",
    learning: [
      "Entrada de dados pelo terminal usando readline-sync.",
      "Separação das regras de cálculo em funções e módulos.",
      "Uso de condições para estimar prazos conforme a distância.",
    ],
  },
  {
    id: "site-semantico",
    title: "Site semântico",
    module: "LIMA",
    category: "Front-end",
    description:
      "Páginas de conteúdo com artigos, notícias e postagens para praticar estruturação e navegação em HTML semântico.",
    tech: ["HTML5", "Semântica"],
    path: "LIMA/aula3/SITE_SEMANTICO",
    filename: "index.html",
    preview:
      "<header>\n  <nav>...</nav>\n</header>\n<main>\n  <article>...</article>\n</main>\n<footer>...</footer>",
    learning: [
      "Uso de elementos semânticos para estruturar conteúdo.",
      "Navegação entre páginas de artigos, notícias e postagens.",
      "Organização de uma página estática em HTML.",
    ],
  },
  {
    id: "smartcoffee-db",
    title: "SmartCoffee — dados",
    module: "BCD",
    category: "Banco de dados",
    description:
      "Projeto de banco de dados para cafeteria, com modelos, dicionário e scripts que exploram produtos, estoque, pedidos e clientes.",
    tech: ["SQL", "Modelagem", "Relacionamentos"],
    path: "BCD/projeto-Smartcoffe",
    filename: "fisico_smartCoffeeV2.sql",
    preview:
      "CREATE DATABASE\n  SmartCoffee_Keynan;\n\n-- produtos · estoque\n-- pedidos · clientes\n\n-- do conceito ao modelo físico",
    learning: [
      "Evolução de modelos conceituais e lógicos.",
      "Representação de produtos, estoque, pedidos e programas de fidelidade.",
      "Estudo de relações e chaves estrangeiras em scripts SQL.",
    ],
  },
  {
    id: "oficina-js",
    title: "Orçamento de oficina",
    module: "PBE",
    category: "Back-end",
    description:
      "Exercício de regras de negócio que calcula um orçamento de peças e mão de obra e verifica condições de garantia.",
    tech: ["JavaScript", "Node.js", "Condicionais"],
    path: "PBE/aulas_1-10/aula_5_sistemas/oficina",
    filename: "funcoesOficina.js",
    preview:
      "// regras de negócio\npreçoDaPeça + mãoDeObra\n\n// garantia\ntempoDeUso <= 3\n\n// organizar, calcular, validar",
    learning: [
      "Entrada de preço, horas de serviço e tempo de uso no console.",
      "Cálculo de mão de obra e total do orçamento.",
      "Verificação de garantia com condicionais e funções.",
    ],
  },
  {
    id: "curriculo",
    title: "Currículo em HTML",
    module: "LIMA",
    category: "Front-end",
    description:
      "Uma página de currículo para exercitar hierarquia de informações, títulos, links e estrutura básica de documentos HTML.",
    tech: ["HTML5", "Estruturação"],
    path: "LIMA/aula3/Curriculo",
    filename: "index.html",
    preview:
      "<main>\n  <h1>Objetivos</h1>\n  <p>...</p>\n  <h1>Escolaridade</h1>\n  <p>...</p>\n</main>",
    learning: [
      "Organização de informações em títulos e parágrafos.",
      "Uso de links e estrutura de uma página HTML.",
      "Apresentação de formação e objetivos acadêmicos.",
    ],
  },
];
