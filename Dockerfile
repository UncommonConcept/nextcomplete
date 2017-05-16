FROM node:6.10.3
#FROM node:6-onbuild

RUN yarn -V

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN yarn install
# RUN yarn install --production

# Bundle app source
COPY . /usr/src/app

# set the loglevel for npm with environment variable

EXPOSE 3000

#CMD [ "npm", "start" ]
CMD ["./start.sh"]

#next specific build - actually happens in the start.sh file
