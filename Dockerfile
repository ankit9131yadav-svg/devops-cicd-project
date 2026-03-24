FROM node:18

WORKDIR /app

# ✅ Copy from app folder
COPY app/package*.json ./

RUN npm install

# ✅ Copy rest of app
COPY app/ .

EXPOSE 3000

CMD ["node", "app.js"]
