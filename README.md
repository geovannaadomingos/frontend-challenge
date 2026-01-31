# Frontend Challenge – NFT Marketplace

Este projeto é uma aplicação frontend desenvolvida em **Next.js** que simula um marketplace de **NFTs**, com foco em boa organização de código, clareza de regras de negócio, responsividade e testes unitários.

A solução foi pensada para ser simples de entender, fácil de evoluir e próxima de um cenário real de produto.

---

## ✨ Funcionalidades

- 📦 **Listagem de NFTs** consumindo API externa
- ➕ **Paginação incremental (Load More)**
- 🛒 **Carrinho de compras** com controle global de estado
- 🔁 **Adicionar e remover itens do carrinho**
- 🔤 **Ordenação por nome**
- 📊 **Indicador de progresso de carregamento**
- 📱 **Layout totalmente responsivo**, com adaptação de imagens e grid

> ℹ️ Observação: o estado do carrinho **não é persistido** entre recarregamentos (F5), por decisão consciente de escopo.

---

## 🧱 Stack Utilizada

### Produção
- **Next.js** 16.1.5
- **React** 19
- **TypeScript**
- **Redux Toolkit** (estado global do carrinho)
- **React Redux**
- **Axios** (requisições HTTP)
- **Framer Motion** (animações)
- **Sass / CSS Modules** (estilização)

### Testes e Qualidade
- **Jest**
- **Testing Library (React & Jest DOM)**
- **ts-jest**
- **ESLint**
- **Prettier**

---

## 🗂️ Estrutura do Projeto

A organização segue um padrão **Component-First**, inspirado em boas práticas de Atomic Design:

```
src/
 ├─ components/
 │   ├─ NFTCard/
 │   ├─ NFTGrid/
 │   ├─ CartDrawer/
 │   ├─ CartItem/
 │   ├─ Header/
 │   ├─ Footer/
 │   ├─ LoadMore/
 │   └─ ProgressBar/
 │
 ├─ hooks/
 │   └─ useNFTList.ts
 │
 ├─ pages/
 │   ├─ _app.tsx
 │   ├─ index.tsx
 │   └─ index.test.tsx
 │
 ├─ services/
 │   ├─ nft-api.ts
 │   └─ nft-api.test.ts
 │
 ├─ store/
 │   ├─ cartSlice.ts
 │   ├─ cartSlice.test.ts
 │   └─ store.ts
 │
 ├─ styles/
 │   ├─ globals.scss
 │   └─ _variables.scss
 │
 └─ types/
     └─ nft.types.ts
```

Essa abordagem facilita:
- Reutilização de componentes
- Manutenção e escalabilidade
- Testabilidade isolada

---

## 🧪 Testes

Foram implementados testes unitários focados principalmente em **regras de negócio**, incluindo:

- Reducer e actions do carrinho (`cartSlice`)
- Página principal (`Home`)
- Componentes críticos como `NFTCard`
- Serviço de API (`nft-api`)

A cobertura não é total por decisão de tempo e priorização, mas a base está estruturada para fácil expansão.

Para rodar os testes:

```bash
npm run test
```

---

## ▶️ Como Rodar o Projeto

### Pré-requisitos
- Node.js 18+ (ou compatível com Next 16)
- npm

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível em:

```
http://localhost:3000
```

### Build de produção

```bash
npm run build
npm run start
```

---

## 🚧 O que Ficou Fora do Escopo

Alguns pontos ficaram de fora por decisão consciente de prazo:

- 🐳 Docker
- 🔄 CI/CD
- 📈 Cobertura total de testes
- 💾 Persistência do carrinho (ex: localStorage)
- 🎞️ Algumas animações/transições mais avançadas

Esses pontos foram priorizados abaixo de estabilidade, clareza e organização do código.

---

## 🧠 Decisões Técnicas & Observações

- O **Redux Toolkit** foi utilizado por ser simples, previsível e adequado para o controle de estado global do carrinho.
- A lógica de paginação foi centralizada no hook `useNFTList`, mantendo a página mais declarativa.
- Os testes foram escritos priorizando **comportamento** e não implementação interna.
- O projeto foi estruturado para facilitar manutenção e evolução futura, mesmo com escopo reduzido.
- Em situações de tempo limitado, a prioridade foi entregar uma aplicação funcional, legível e confiável.

---

## 📌 Considerações Finais

Este projeto representa uma solução realista para um desafio frontend, equilibrando:

- Boa arquitetura
- Qualidade de código
- Testabilidade
- Experiência do usuário

Mesmo com escopo controlado, a base foi pensada para escalar.

---

Obrigado pela oportunidade 🚀

