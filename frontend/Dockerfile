FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Expose React dev server port
EXPOSE 5173

# Start React app
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]