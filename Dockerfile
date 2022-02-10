FROM node:alpine
RUN apk add --no-cache make gcc g++ python3 git && git clone https://github.com/topiassaari/ts_gallery.git && cd /ts_gallery && \
  npm install && \
  npm rebuild bcrypt --build-from-source &&  npm run build &&\
  apk del make gcc g++ python3 git
EXPOSE 8000
WORKDIR /ts_gallery
CMD ["npm", "start"]