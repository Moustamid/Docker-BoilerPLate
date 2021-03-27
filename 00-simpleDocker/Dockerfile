# * Specify a base image
FROM node:alpine

# putting our appication in the app directory inside our Docker container 
WORKDIR /usr/app


# * install dependencies

# Copy package.json in this directory to the Docker container directory 
COPY ./package.json  ./

RUN npm install
COPY ./  ./




# * Default command
CMD ["npm" , "start"]