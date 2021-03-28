# * Specify a base image
FROM node:alpine

# putting our appication in the app directory inside our Docker container 
WORKDIR /usr/app


# * install dependencies

# Copy package.json in this directory to the Docker container directory 
COPY ./package.json  ./
RUN npm install

# Copy all of the source code
COPY ./ ./


# * Default command
CMD ["npm" , "start"]


# next add docker compose to connect the node add to redis 