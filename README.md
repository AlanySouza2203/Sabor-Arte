# Sabor & Arte

Sistema de gerenciamento de buffet para eventos. Plataforma completa com área administrativa para gestão interna e portal público para clientes.

## Estrutura do Projeto

```
├── .github/workflows/
│   └── deploy.yml          # Pipeline CI/CD GitHub Actions (Vercel Deploy)
├── adm/                    # Painel Administrativo
│   ├── clientes.html       # Cadastro e gestão de clientes
│   ├── dashboard.html      # Dashboard com métricas e visão geral
│   ├── eventos.html        # Gerenciamento de eventos
│   ├── funcionarios.html   # Controle de funcionários
│   ├── orcamentos.html     # Aprovação e acompanhamento de orçamentos
│   ├── pedidos.html        # Controle de pedidos e status
│   └── servicos.html       # Cadastro de itens do cardápio
├── api/
│   └── index.js            # Entrypoint Serverless Function para Vercel
├── public/                 # Portal do Cliente
│   ├── cadastro.html       # Cadastro de novos clientes
│   ├── cardapio.html       # Visualização e seleção do cardápio
│   ├── confirpedi.html     # Confirmação de pedido
│   ├── dashboard_cliente.html # Painel do cliente
│   ├── evento.html         # Criação e configuração do evento
│   ├── index.html          # Página inicial / landing page
│   ├── login.html          # Tela de login
│   ├── meu_pedido.html     # Acompanhamento do pedido/orçamento
│   ├── pacotes.html        # Seleção de pacotes de buffet
│   └── pagamento.html      # Finalização e pagamento
├── scripts/
│   └── migrate.js          # Script de automação e migração do Banco de Dados
├── .env.example            # Exemplo de variáveis de ambiente
├── db.js                   # Módulo de conexão com Pool MySQL (mysql2)
├── SABOR BUFFET SQL.sql    # Schema e seeds do banco de dados MySQL
├── server.js               # Servidor Express com API REST e arquivos estáticos
└── vercel.json             # Configuração de rotas e rewrites da Vercel
```

---

## Tecnologias

- **Frontend:** HTML5, CSS3 (estilização customizada), JavaScript vanilla (fetch dinâmico sem hardcode)
- **Backend:** Node.js + Express + Serverless Function Vercel
- **Banco de Dados:** MySQL / MariaDB (compatível com TiDB Cloud, Aiven, Railway, Render)
- **CI/CD & Deploy:** GitHub Actions + Vercel

---

## Configuração do Banco de Dados em Nuvem (Gratuito)

A aplicação utiliza o driver `mysql2` e suporta qualquer provedor de MySQL em nuvem com suporte a SSL. Provedores gratuitos recomendados:

- **TiDB Cloud (Serverless MySQL)**: [tidbcloud.com](https://tidbcloud.com/) (Gratuito, 100% MySQL)
- **Aiven for MySQL**: [aiven.io](https://aiven.io/)
- **Railway / Render / Clever Cloud**

### Executando Migrações do Banco de Dados

Para criar as tabelas e popular os dados iniciais no seu banco em nuvem:

```bash
# 1. Defina as variáveis de ambiente no arquivo .env ou no seu terminal:
DB_HOST=seu-host-mysql.com
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=buffet_db
DB_SSL=true

# 2. Execute a migração automática:
npm run migrate
```

---

## Variáveis de Ambiente

Crie um arquivo `.env` baseado no `.env.example`:

| Variável | Descrição | Exemplo |
| :--- | :--- | :--- |
| `PORT` | Porta do servidor local | `3000` |
| `DB_HOST` | Host do banco de dados MySQL | `localhost` ou host da nuvem |
| `DB_PORT` | Porta do banco de dados | `3306` |
| `DB_USER` | Usuário do MySQL | `root` ou usuário da nuvem |
| `DB_PASSWORD` | Senha do MySQL | `minhasenha` |
| `DB_NAME` | Nome do banco de dados | `buffet_db` |
| `DB_SSL` | Habilitar SSL para conexão remota | `true` ou `false` |

---

## Como Executar Localmente

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure o arquivo `.env` com seu banco de dados local ou remoto.
3. Inicie o servidor:
   ```bash
   npm start
   ```
4. Acesse a aplicação no seu navegador em `http://localhost:3000`.

---

## Deploy na Vercel e Pipeline CI/CD

### 1. Configurando o Projeto na Vercel

Ao importar o repositório na Vercel:
1. **Framework Preset**: Selecione `Other` ou `Express`.
2. **Root Directory**: `./` (Manter o diretório raiz).
3. **Environment Variables**: Adicione as variáveis de ambiente do seu banco de dados:
   - `DB_HOST`
   - `DB_PORT`
   - `DB_USER`
   - `DB_PASSWORD`
   - `DB_NAME`
   - `DB_SSL` (`true`)

### 2. Configurando o GitHub Actions para Deploy Automático

Para habilitar o pipeline `.github/workflows/deploy.yml`:
Adicione as seguintes **Secrets** no seu repositório GitHub (`Settings -> Secrets and variables -> Actions`):

- `VERCEL_TOKEN`: Token gerado em *Vercel -> Account Settings -> Tokens*.
- `VERCEL_ORG_ID`: Encontrado nas configurações da conta/time da Vercel.
- `VERCEL_PROJECT_ID`: Encontrado em *Project Settings -> General* na Vercel.

Toda vez que houver um `push` ou `merge` na branch `main`, o GitHub Actions irá:
1. Testar e validar a sintaxe do código (`npm test`).
2. Gerar o build e enviar o deploy automaticamente para a Vercel.

---

© 2026 Sabor & Arte
