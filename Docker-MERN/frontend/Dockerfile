# stage 1

#use the official nodejs image for build the react app
FROM node:18 AS build

#set working directory
WORKDIR /app

#copy the package.json and package-lock.json, then install dependencies
COPY package*.json ./
RUN npm install

#copy the rest of the app code
COPY . .

#build the react app
RUN npm run build


# stage 2:

#serve the app with nginx
FROM nginx:alpine
#copy the build folder to the nginx html folder
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
