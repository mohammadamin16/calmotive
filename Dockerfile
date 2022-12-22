FROM node:16 as build
WORKDIR .
COPY package.json .
COPY yarn.lock .
RUN yarn add global serve
RUN yarn --frozen-lockfile install
COPY . .
RUN yarn expo export:web

# production environment
FROM nginx:stable-alpine
COPY --from=build web-build /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]