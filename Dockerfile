# Usa imagem oficial do Node
FROM node:20-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia package.json e lock primeiro (cache)
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Build do Next.js
RUN npm run build

# Porta padrão do Next
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]
