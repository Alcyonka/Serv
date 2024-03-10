FROM node:12

# Create working directory inside your container which will hold our source code
WORKDIR /usr/src/app

# Copy Package.json file which will be used to install App dependencies inside the container
COPY package*.json ./

# Run npm install to install all dependencies inside docker container
RUN npm install

# Copy application source code to /usr/src/app folder
COPY . .

#Expose port 8000 on your container
EXPOSE 8000

# Run your node application inside your container
CMD [ "node", "server.js" ]