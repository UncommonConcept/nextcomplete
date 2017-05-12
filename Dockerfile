FROM node:6-onbuild
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
RUN npm run build
COPY . /usr/src/app

#next specific build