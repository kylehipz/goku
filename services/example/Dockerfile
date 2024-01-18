FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .

COPY --from=ghcr.io/ufoscout/docker-compose-wait:latest /wait /wait

CMD /wait && npm start
