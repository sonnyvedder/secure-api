## Secure API Platform (NestJS + PostgreSQL + Docker)

A **secure, modular, enterprise-ready backend API** built with **NestJS**.  
Designed as a learning + demo project to simulate **real-world enterprise architecture** with  
authentication, security middleware, and Dockerized deployment.

---

## Features (Step 1 Completed)

✅ Built with **NestJS 10+ (TypeScript)**  
✅ Secure by default: `Helmet`, `CORS`, and `Rate Limiter`  
✅ Integrated with **PostgreSQL** via TypeORM  
✅ Modular & ready for **microservice refactor**  
✅ Dockerized for **easy VPS deployment**  
✅ Swagger API Docs (auto-generated)  
✅ Ready for next steps: Auth, Redis, Kafka, Elasticsearch

---

## Project Structure

secure-api/
├── src/
│ ├── main.ts # Entry point
│ ├── app.module.ts # Global module setup
│ ├── modules/ # Feature modules
│ │ ├── auth/ # (Step 2)
│ │ ├── users/ # (Step 2)
│ │ ├── cache/ # (Step 4)
│ │ ├── kafka/ # (Step 5)
│ │ └── logger/ # (Step 6)
│ └── common/ # Guards, Interceptors, DTOs
├── .env # Environment configuration
├── Dockerfile # Multi-stage build
├── docker-compose.yml # Compose for Postgres + API
├── package.json
└── README.md


---

## Environment Variables

Create a `.env` file in project root:

```env
APP_NAME=SecureAPI
APP_PORT=3000

DB_HOST=postgres
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_NAME=securedb

JWT_SECRET=supersecretkey123

---

## Local Development
1. Install dependencies
npm install
2. Run development server
npm run start:dev
3. Access API
API Base: http://localhost:3000
Swagger Docs: http://localhost:3000/docs




