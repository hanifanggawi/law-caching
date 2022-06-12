FROM node:16

WORKDIR /service

COPY package*.json ./

RUN npm install
COPY . .
RUN npx prisma migrate
RUN npm run build

EXPOSE 8010

CMD [ "npm", "run", "serve" ]