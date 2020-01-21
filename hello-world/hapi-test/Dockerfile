FROM node:13.6.0-alpine
COPY ./dist ./dist
ADD ./package.json .
RUN npm install
CMD npm start
