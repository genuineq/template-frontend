#!/bin/bash
set -e

# Source the nvm main script
source ~/.nvm/nvm.sh

# Install configured node version
nvm install ${NODE_VERSION}

# Use configured node version
nvm use ${NODE_VERSION}

exec "$@"
