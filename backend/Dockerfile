FROM node:20-alpine

WORKDIR /app

# Copy package.json & install everything (dev deps included)
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Expose backend port
EXPOSE 5001

# Start with npm script
CMD ["npm", "start"]
