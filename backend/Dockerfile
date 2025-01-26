# Use official Node.js image
FROM node:16-slim

# Set working directory
WORKDIR /app

# Copy files
COPY . .

# Install dependencies
RUN npm install

# Expose the application port
EXPOSE 5000

# Run the application
CMD ["node", "src/server.js"]
