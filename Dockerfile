FROM node:6-onbuild
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install -q
RUN npm run build
COPY . /usr/src/app
# set the loglevel for npm with environment variable
ENV NPM_CONFIG_LOGLEVEL=warn

#next specific build