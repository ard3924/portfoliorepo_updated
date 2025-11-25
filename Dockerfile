# --- Build Stage ---
# Use Node.js to build the React application
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy source code and run the build script
COPY . .
# Vite builds to the 'dist' folder by default
RUN npm run build

# --- Serve Stage (Final Image) ---
# Use a lightweight NGINX image for serving static content
FROM nginx:alpine AS final

# Copy our custom NGINX configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static files from the 'build' stage
COPY --from=build /app/dist /usr/share/nginx/html

# NGINX runs on port 80 by default
EXPOSE 80

# Command to run NGINX (default)
CMD ["nginx", "-g", "daemon off;"]