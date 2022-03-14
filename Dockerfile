FROM node:14-alpine

WORKDIR /home/app

COPY package*.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile 

COPY . .

RUN pnpm build

CMD ["node", "dist/main.js"]