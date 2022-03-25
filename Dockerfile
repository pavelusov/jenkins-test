FROM node:17-alpine as main
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src/ ./src
EXPOSE 3000
CMD ["node", "src/index.mjs"]
