FROM node:16
WORKDIR .
COPY package.json .
COPY yarn.lock .
RUN yarn add global serve
RUN yarn --frozen-lockfile install
COPY . .
RUN yarn expo export:web
EXPOSE 3000
CMD yarn serve -s web-build


