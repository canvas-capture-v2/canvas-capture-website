FROM node:22.14-slim
WORKDIR /var/app/
COPY . /var/app/

RUN ["npm", "install"]
EXPOSE 5173
CMD ["npx", "vite", "dev"]