FROM node:12


RUN mkdir /app

WORKDIR /app

# Set from outside the docker
COPY package*.json /app
RUN npm install

COPY . /app

CMD [ "yarn", "start" ]