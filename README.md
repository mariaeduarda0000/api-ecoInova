# 🌱 API - Semeando Futuros

API RESTful desenvolvida para a ONG **EcoInova**, com o objetivo de permitir que a equipe de comunicação atualize informações do site institucional sem precisar alterar o código-fonte.  
A API fornece endpoints para gerenciar **Membros da Equipe**, **Métricas de Impacto** e **Depoimentos**.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** — Ambiente de execução JavaScript
- **Express.js** — Framework para criação da API
- **MySQL** — Banco de dados relacional
- **Sequelize ORM** — Abstração para modelagem e manipulação do banco
- **Dotenv** — Gerenciamento das variáveis de ambiente

---

## 🗄️ Estrutura do Projeto

api-ecoinova/
│
├── controllers/        # Lógica de cada recurso (Team, Metrics, Testimonials)
│   ├── teamController.js
│   ├── metricsController.js
│   └── testimonialsController.js
│
├── models/             # Modelos das tabelas (Schemas do Sequelize)
│   ├── Team.js
│   ├── Metric.js
│   └── Testimonial.js
│
├── routes/             # Rotas da aplicação
│   ├── teamRoutes.js
│   ├── metricsRoutes.js
│   └── testimonialsRoutes.js
│
├── config/             # Conexão com o banco de dados
│   └── db.js
│
├── .env.example        # Exemplo de variáveis de ambiente
├── .gitignore          # Ignora node_modules e .env
├── package.json
├── server.js           # Arquivo principal do servidor
└── README.md           # Documentação do projeto

---

🧠 Modelagem do Banco de Dados

| Campo     | Tipo     | Descrição             |
| --------- | -------- | --------------------- |
| id        | INT (PK) | Identificador único   |
| nome      | STRING   | Nome do membro        |
| cargo     | STRING   | Cargo ou função       |
| url_foto  | STRING   | URL da foto do membro |
| bio_curta | TEXT     | Breve biografia       |

| Campo     | Tipo     | Descrição                     |
| --------- | -------- | ----------------------------- |
| id        | INT (PK) | Identificador único           |
| titulo    | STRING   | Título da métrica             |
| valor     | STRING   | Valor da métrica (ex: “500+”) |
| icone_svg | STRING   | Ícone representando a métrica |

| Campo   | Tipo                         | Descrição                                 |
| ------- | ---------------------------- | ----------------------------------------- |
| id      | INT (PK)                     | Identificador único                       |
| autor   | STRING                       | Nome do autor                             |
| relacao | STRING                       | Relação com a ONG (Aluno, Parceiro, etc.) |
| texto   | TEXT                         | Texto do depoimento                       |
| status  | ENUM('pendente', 'aprovado') | Status do depoimento                      |

---

🔗 Endpoints da API

| Método | Rota            | Descrição                  |
| ------ | --------------- | -------------------------- |
| GET    | `/api/team`     | Listar todos os membros    |
| GET    | `/api/team/:id` | Buscar membro específico   |
| POST   | `/api/team`     | Criar novo membro          |
| PUT    | `/api/team/:id` | Atualizar membro existente |
| DELETE | `/api/team/:id` | Remover membro             |

| Método | Rota               | Descrição                   |
| ------ | ------------------ | --------------------------- |
| GET    | `/api/metrics`     | Listar todas as métricas    |
| POST   | `/api/metrics`     | Criar nova métrica          |
| PUT    | `/api/metrics/:id` | Atualizar métrica existente |

| Método | Rota                            | Descrição                                       |
| ------ | ------------------------------- | ----------------------------------------------- |
| GET    | `/api/testimonials/public`      | Listar apenas os aprovados                      |
| GET    | `/api/testimonials/admin`       | Listar todos (admin)                            |
| POST   | `/api/testimonials`             | Criar novo depoimento (status padrão: pendente) |
| PATCH  | `/api/testimonials/:id/approve` | Aprovar depoimento                              |
| DELETE | `/api/testimonials/:id`         | Deletar depoimento                              |

---

🧾 Autor

Desenvolvido pela aluna Maria Eduarda
Este projeto foi desenvolvido para fins educacionais.
Sinta-se à vontade para estudar e adaptar o código conforme sua necessidade.