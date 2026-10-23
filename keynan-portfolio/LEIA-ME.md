# Portfólio de Keynan Santos

Este arquivo contém o site em dois formatos:

- **`site-pronto/`** — versão compilada. Envie o conteúdo desta pasta para a raiz de uma hospedagem estática.
- **`codigo-fonte/`** — arquivos para editar e recompilar o site.

## Executar ou editar

Requer Node.js 22 ou mais recente e pnpm 10. No terminal, entre em `codigo-fonte/` e execute:

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev:static
```

Abra `http://localhost:3000` para visualizar o site. Para gerar um novo build de produção, execute:

```bash
pnpm build:static
```

O resultado atualizado ficará em `codigo-fonte/dist/public/`. O portfólio pode ser hospedado como site estático, sem banco de dados. Não foram incluídos `.env`, credenciais, dependências instaladas nem histórico Git.
