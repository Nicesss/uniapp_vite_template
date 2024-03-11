FROM nexus3.tineco.com/nginx-nacos:1.0.0
COPY ./dist /usr/share/nginx/html/<%= name %>
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
