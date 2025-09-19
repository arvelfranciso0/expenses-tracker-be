#User Node.js LTS version
FROM node:18-alpine AS base

#Create app directory
WORKDIR /usr/src/app

ENV NODE_ENV=development


#Copy package.json
COPY package*.json ./

# ---------- Development Stage ----------
FROM base AS dev
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]