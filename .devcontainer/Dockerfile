FROM mcr.microsoft.com/devcontainers/javascript-node:20

# Install Java (needed for Sencha Cmd) and unzip
RUN apt-get update && \
    apt-get install -y openjdk-17-jre-headless unzip wget && \
    apt-get clean
