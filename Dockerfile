
FROM nginx:1.13.12-alpine
RUN mkdir /usr/share/nginx/html/Massage-Natalia
COPY index.html /usr/share/nginx/html/Massage-Natalia/
RUN mkdir /usr/share/nginx/html/Massage-Natalia/images
COPY images/* /usr/share/nginx/html/Massage-Natalia/images
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
