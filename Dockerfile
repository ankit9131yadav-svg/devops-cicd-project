FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

# 🔥 IMPORTANT: Copy everything (including views + public)
COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
