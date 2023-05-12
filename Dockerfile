# Etap 1: Budowanie aplikacji
FROM node:14.17.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm build

# Etap 2: Uruchamianie aplikacji
FROM node:14.17.0-alpine
WORKDIR /app
COPY --from=build /app .
RUN npm install --production
HEALTHCHECK --interval=5m --timeout=3s \
    CMD curl -f --spider http://localhost:3000 || exit 1
EXPOSE 3000
CMD ["npm", "start"]

# FROM node:16-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install --only=production
# COPY --from=builder /app/dist /app
# EXPOSE 3000


