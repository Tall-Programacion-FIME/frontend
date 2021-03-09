# base image
FROM node:latest
# set working directory
WORKDIR /build

# add `/app/node_modules/.bin` to $PATH
ENV PATH /build/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /build/package.json
RUN npm install --silent
RUN npm install --save  react react-dom               

# start app
CMD ["npm", "start"]
