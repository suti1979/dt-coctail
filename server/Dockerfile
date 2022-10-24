FROM node:16-alpine

RUN mkdir /server
WORKDIR /server
COPY . .

RUN npm install
RUN npx tsc

EXPOSE 4000

CMD ["node", "dist/app.js"]
