FROM node:20-slim
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Install system deps needed by better-sqlite3
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 make g++ \
    && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
