#!/bin/sh

# Delete all running processes in the container
pm2 delete all

# Copy compiled modules
cp -a /opt/node_modules ./

# rebuild sass
# npm rebuild node-sass

if [ ! -d "./dist" ]; then
	npm run build
fi

# Start the application with pm2
pm2-docker start process.yml
 
/bin/sh
