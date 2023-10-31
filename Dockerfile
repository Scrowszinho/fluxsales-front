FROM node:18

ENV NG_CLI_ANALYTICS=ci
WORKDIR /app
COPY package*.json ./
RUN npm install --yes
COPY . .
RUN npm run build
EXPOSE 4200

CMD ["npm", "start"]