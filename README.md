# 🎥 Let Me Ask Assistant

Uma aplicação desenvolvida para resolver um problema comum em lives de aulas e conteúdos educativos.

Em plataformas como o YouTube, é muito comum que espectadores entrem no meio de uma live e não entendam o que está sendo explicado, pois perderam o contexto inicial da aula.

Este projeto propõe uma solução utilizando Inteligência Artificial para permitir que os usuários façam perguntas sobre o conteúdo que já foi explicado durante a aula e recebam respostas baseadas no próprio conteúdo da live.

---

# 🚀 Como funciona

1. Durante a aula ou apresentação, o conteúdo falado é enviado para o backend.
2. A IA realiza a transcrição da fala.
3. O conteúdo é dividido em pequenos trechos e armazenado no banco de dados.
4. Quando um usuário faz uma pergunta:
   - A aplicação analisa a pergunta
   - Busca partes relevantes do conteúdo já apresentado
   - Gera uma resposta baseada nesse contexto

Dessa forma, mesmo que alguém entre no meio da aula, ainda consegue entender o que está acontecendo sem precisar interromper o apresentador.

---

# 🧠 Tecnologias utilizadas

## Frontend

- **React** — construção da interface da aplicação
- **TailwindCSS** — estilização rápida e responsiva
- **ShadCN UI** — componentes prontos baseados em Tailwind

## Backend

- **Fastify** — framework web rápido e eficiente para Node.js
- **Drizzle ORM** — ORM moderno para manipulação do banco de dados
- **Zod** — validação de dados e schemas

## Banco de dados

- **PostgreSQL** — armazenamento das transcrições e dados da aplicação

## Inteligência Artificial

- **Google Gemini AI** — utilizada para realizar a transcrição do conteúdo e geração de respostas baseadas no contexto

## Infraestrutura

- **Docker** — utilizado para containerização da aplicação

---

# 🏗️ Arquitetura simplificada
