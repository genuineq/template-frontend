FROM ubuntu:18.04

MAINTAINER genuineq

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
    && apt-get install -y locales \
    && locale-gen en_US.UTF-8

ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

# Install system dependencies
RUN apt-get update \
    && apt-get install -y nginx vim curl software-properties-common

# Download NVM (Node Version Manager)
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

# Save configured node version
ARG NODE_VERSION=node
ENV NODE_VERSION ${NODE_VERSION}

# Copy entrypoint script
COPY ./docker-entrypoint.sh /usr/local/bin/
# Backwards compatibility
RUN chmod 777 /usr/local/bin/docker-entrypoint.sh \
     && ln -s /usr/local/bin/docker-entrypoint.sh /

# Change the current working directory of the image to /app
WORKDIR /var/www

# Expose port 33
EXPOSE 80

ENTRYPOINT ["docker-entrypoint.sh"]

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
