# build stage
# Start from the latest stable node version.
FROM node:lts-alpine as build-stage

# Change the current working directory of the image to /app
WORKDIR /app

# Copy package.json and package-lock.json to the image (/app folder).
COPY package*.json ./

# In the image run npm install to get all the dependencies from the package.json file (or use ci for -lock install)
RUN npm install

# Copy the rest of the content to the image (/app folder)
COPY . .

# Run the build command to create the production folder of the project.
RUN npm run build

# production stage
# Get the latest nginx stable version
FROM nginx:stable-alpine as production-stage

# Copy the built folder from the previous step into the nginx default app path
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
