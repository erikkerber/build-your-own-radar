FROM node:12.16.3 as source
WORKDIR /src/build-your-own-radar
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.18
WORKDIR /opt/build-your-own-radar
COPY --from=source /src/build-your-own-radar/dist .
COPY default.template /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
