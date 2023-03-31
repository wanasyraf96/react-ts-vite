# ==== CONFIGURE ====
# Use a node 18.15.0 base image
FROM node:18.15.0 as build

# Set the working directory to /app inside the container
WORKDIR /app

# # ==== BUILD ====
# # Install dependencies (npm install make sure the exact versions in the lockfile get installed)
# COPY package*.json ./
# COPY yarn.lock ./

# Copy app files
COPY . .

# RUN npm install
RUN npm install -g vite
RUN yarn





# #  ==== ENVIRONMENT ====
# # Set environment
# # ENV NODE_ENV production
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]

# ==== START APP ====
# Expose the port on which the app will be running (3000 is the default port that `serve` uses)
EXPOSE 5173

# Start the app
CMD ["yarn", "start"]