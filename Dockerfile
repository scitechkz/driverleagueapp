# Stage 1: Build React app
FROM node:14 as build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire React app directory into the container
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Serve React app using a lightweight server
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built React app from the previous stage
COPY --from=build /app/build ./build

# Install a simple web server to serve the React app
RUN npm install -g serve

# Expose the port your React app runs on (e.g., 3000)
EXPOSE 3000

# Start the web server to serve the React app
CMD ["serve", "-s", "build"]
