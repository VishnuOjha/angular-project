FROM node:14.1-alpine as service
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install 
COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]

#FROM nginx:1.21.6-alpine
#COPY nginx.conf /etc/nginx/nginx.conf
#COPY --from=service /usr/src/app /usr/share/nginx/html
