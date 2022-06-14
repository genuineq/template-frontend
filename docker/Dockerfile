# build stage
# Start from the latest stable node version.
FROM node:lts-alpine as build-stage

# Change the current working directory of the image to /app
WORKDIR /app

# production stage
# Get the latest nginx stable version
FROM nginx:stable-alpine as production-stage

RUN apk update \
    && apk upgrade \
    && apk add --no-cache bash

RUN apk add --no-cache curl

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
RUN . ~/.nvm/nvm.sh && nvm install node

# Copy the built folder from the previous step into the nginx default app path
#COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
