FROM node:6-onbuild

# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# COPY package.json /usr/src/app/
# RUN npm config set registry https://registry.npmjs.org/ && npm install
# RUN npm run build
# COPY . /usr/src/app

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# set the loglevel for npm with environment variable

EXPOSE 3000

#CMD [ "npm", "start" ]
CMD ["./start.sh"]

#next specific build
