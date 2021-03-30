FROM node:alpine

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

RUN npm run build
 
FROM nginx

COPY --from=0 /app/build /usr/share/nginx/html


# run : 

# 1 - docker build .
# 2 - docker run -p 8080:80 IMAGE_ID