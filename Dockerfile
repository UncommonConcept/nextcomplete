FROM node:6-onbuild
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm config set registry https://registry.npmjs.org/ && npm install
RUN npm run build
COPY . /usr/src/app
# set the loglevel for npm with environment variable

EXPOSE 3000

#next specific build