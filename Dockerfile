FROM node:18

WORKDIR /app

# COPY package.json /app/
COPY package.json .

RUN npm install

# COPY main.js .
COPY . .

EXPOSE 5000

CMD [ "npm", "run", "start:dev" ]