# 🍽️ Sabor & Arte — Sistema de Gerenciamento de Buffet e Eventos

[![Aplicação](https://img.shields.io/badge/Aplicação-Web-gold?style=for-the-badge)](https://sabor-arte-gamma.vercel.app/)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-API-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-Banco_de_Dados-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)

**Aplicação publicada:** [Sabor & Arte](https://sabor-arte-gamma.vercel.app/)  
**Repositório:** [AlanySouza2203/sabor-arte-eventos](https://github.com/AlanySouza2203/sabor-arte-eventos)

---

## 1. Identificação Acadêmica

| Campo | Informação |
|---|---|
| **Disciplina** | Projeto Integrador |
| **Orientador** | Profº Hudson Neves |
| **Autora do projeto** | Alany Souza |
| **Modalidade** | Projeto individual |


## 2. Descrição do Projeto

O **Sabor & Arte** é um sistema web desenvolvido individualmente para auxiliar no gerenciamento de empresas de buffet e na organização de eventos. A plataforma reúne funcionalidades administrativas e recursos destinados aos clientes, centralizando informações e facilitando o acompanhamento dos serviços contratados.

O sistema possui duas áreas principais:

- **Painel administrativo:** gerenciamento de clientes, funcionários, eventos, orçamentos, pedidos e serviços.
- **Portal do cliente:** cadastro, login, consulta de cardápios, seleção de pacotes, configuração de eventos, confirmação de pedidos, acompanhamento de orçamentos e acesso à área de pagamento.

A aplicação utiliza HTML, CSS e JavaScript no frontend, Node.js e Express no backend e MySQL ou MariaDB para armazenamento dos dados.

## 3. Objetivos

### 3.1. Objetivo geral

Desenvolver individualmente um sistema web para centralizar e facilitar o gerenciamento de buffet e eventos, integrando os processos administrativos aos recursos disponibilizados aos clientes.

### 3.2. Objetivos específicos

- Organizar o cadastro e o gerenciamento de clientes.
- Facilitar o controle de funcionários.
- Centralizar o gerenciamento de eventos.
- Permitir o acompanhamento de orçamentos.
- Disponibilizar cardápios e pacotes de buffet.
- Organizar pedidos e seus respectivos status.
- Integrar a aplicação a um banco de dados relacional.
- Aplicar conhecimentos de desenvolvimento frontend e backend.
- Desenvolver habilidades de organização, documentação e versionamento de código.

## 4. Funcionalidades

### 4.1. Painel administrativo

| Módulo | Descrição |
|---|---|
| Dashboard | Apresenta uma visão geral do sistema. |
| Clientes | Cadastro e gerenciamento de clientes. |
| Funcionários | Controle de funcionários. |
| Eventos | Gerenciamento dos eventos cadastrados. |
| Orçamentos | Acompanhamento de orçamentos. |
| Pedidos | Controle de pedidos e acompanhamento de status. |
| Serviços | Cadastro e gerenciamento de itens do cardápio. |

### 4.2. Portal do cliente

| Módulo | Descrição |
|---|---|
| Página inicial | Apresentação da plataforma. |
| Cadastro | Registro de novos clientes. |
| Login | Interface de acesso à plataforma. |
| Dashboard do cliente | Área de acompanhamento das informações do cliente. |
| Cardápio | Visualização e seleção de itens. |
| Pacotes | Seleção de pacotes de buffet. |
| Evento | Criação e configuração de eventos. |
| Confirmação de pedido | Confirmação das informações do pedido. |
| Meu pedido | Acompanhamento do pedido e do orçamento. |
| Pagamento | Interface de finalização e pagamento. |

## 5. Tecnologias Utilizadas

| Categoria | Tecnologia | Finalidade |
|---|---|---|
| Frontend | HTML5 | Estrutura das páginas. |
| Estilização | CSS3 | Estilização das interfaces. |
| Linguagem frontend | JavaScript | Interatividade e comunicação com a API. |
| Backend | Node.js | Execução da aplicação no servidor. |
| Framework backend | Express | Gerenciamento do servidor e das rotas da API. |
| Driver de banco de dados | mysql2 | Comunicação com o MySQL. |
| Banco de dados | MySQL / MariaDB | Armazenamento das informações. |
| Hospedagem | Vercel | Implantação da aplicação, conforme configuração. |
| Versionamento | Git e GitHub | Versionamento e hospedagem do código-fonte. |

## 6. Arquitetura da Solução

A aplicação está organizada em camadas responsáveis pela interface, pelo processamento das requisições e pela persistência dos dados.

```text
Usuário
   |
   v
Frontend
HTML + CSS + JavaScript
   |
   | Requisições HTTP
   v
API REST / Backend
Node.js + Express
   |
   | Consultas e operações
   v
Banco de Dados
MySQL / MariaDB
   |
   | Retorno dos dados
   v
Backend / API REST
   |
   | Resposta HTTP
   v
Frontend
Exibição das informações
```

## 7. Banco de Dados

O projeto utiliza um banco de dados relacional identificado como `buffet_db`.

| Propriedade | Valor |
|---|---|
| SGBD | MySQL / MariaDB |
| Nome do banco | `buffet_db` |
| Driver de conexão | `mysql2` |
| Módulo de conexão | `db.js` |
| Script de migração | `scripts/migrate.js` |
| Arquivo SQL | `SABOR BUFFET SQL.sql` |

As entidades documentadas incluem usuários, clientes, eventos, serviços, orçamentos, itens de orçamento e mensagens.

**Diagrama entidade-relacionamento:** adicionar o diagrama atualizado do banco de dados.

## 8. Instalação

### 8.1. Clonar o repositório

```bash
git clone https://github.com/AlanySouza2203/sabor-arte-eventos.git
cd sabor-arte-eventos
```

### 8.2. Instalar as dependências

```bash
npm install
```

### 8.3. Configurar as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto, conforme as variáveis utilizadas pelo backend.

```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=buffet_db
DB_SSL=false
```

Substitua os valores de exemplo pelos dados do ambiente utilizado. Não publique credenciais ou senhas no GitHub.

### 8.4. Preparar o banco de dados

1. Acesse o MySQL ou MariaDB.
2. Crie ou selecione o banco `buffet_db`.
3. Confira o conteúdo do arquivo `SABOR BUFFET SQL.sql`.
4. Execute o script SQL conforme as instruções do projeto.
5. Confira as configurações de conexão.

## 9. Como Executar

Os comandos dependem dos scripts configurados no `package.json`.

Para iniciar a aplicação, caso o script `start` esteja configurado:

```bash
npm start
```

Se o projeto utilizar scripts separados para backend e frontend, execute os comandos correspondentes definidos no `package.json`.

A aplicação local poderá ser acessada pelo endereço informado no terminal.

**Aplicação publicada:** [Sabor & Arte — Buffet e Eventos](https://sabor-arte-gamma.vercel.app/)

## 10. Estrutura do Projeto

```text
sabor-arte-eventos/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── adm/
│   ├── clientes.html
│   ├── dashboard.html
│   ├── eventos.html
│   ├── funcionarios.html
│   ├── orcamentos.html
│   ├── pedidos.html
│   └── servicos.html
├── api/
│   └── index.js
├── public/
│   ├── cadastro.html
│   ├── cardapio.html
│   ├── confirpedi.html
│   ├── dashboard_cliente.html
│   └── evento.html
├── scripts/
│   └── migrate.js
├── .env.example
├── db.js
├── SABOR BUFFET SQL.sql
├── server.js
├── vercel.json
└── README.md
```

A estrutura deverá ser conferida com os arquivos existentes na versão atual do repositório.

## 11. Regras de Negócio

- Um evento deve estar associado a um cliente.
- Um orçamento deve conter pelo menos um item.
- O total do orçamento deve ser calculado a partir dos itens.
- A confirmação do evento depende da aprovação do orçamento, conforme a regra prevista no sistema.
- O valor pago não deve ultrapassar o total correspondente.

## 12. API REST

O backend utiliza Node.js e Express para realizar a comunicação entre o frontend e o banco de dados.

A documentação dos endpoints, métodos HTTP, parâmetros e respostas deve ser preenchida com base nas rotas realmente implementadas no código-fonte.

## 13. Capturas de Tela

As imagens das principais interfaces poderão ser adicionadas ao repositório em um diretório como `docs/imagens/`.

- Página inicial.
- Dashboard administrativo.
- Gestão de clientes.
- Gestão de eventos e orçamentos.
- Cardápio e pacotes.
- Área do cliente.

## 14. Deploy

O projeto possui uma aplicação publicada na Vercel. A configuração de implantação, as variáveis de ambiente e a automação devem ser mantidas de acordo com os arquivos existentes no repositório.

**Aplicação:** [Sabor & Arte](https://sabor-arte-gamma.vercel.app/)

## 15. Autoria do Projeto

**Desenvolvedora:** Alany Souza.

**Orientador:** Profº Hudson Neves.

**Modalidade:** Projeto individual, desenvolvido exclusivamente por sua autora.

Todas as etapas de desenvolvimento deste projeto são de responsabilidade da autora, incluindo planejamento, implementação, organização do código, integração com o banco de dados e documentação, conforme as atividades efetivamente realizadas.

## 16. Melhorias Futuras

- Documentar todos os endpoints da API.
- Adicionar o diagrama entidade-relacionamento.
- Inserir capturas de tela atualizadas.
- Documentar os testes automatizados, caso existam.
- Revisar os mecanismos de autenticação e segurança.
- Aprimorar a experiência de uso em dispositivos móveis.
- Manter a documentação atualizada conforme a evolução do projeto.

## 17. Status do Projeto

**Projeto individual:** desenvolvido por Alany Souza.

O estado de conclusão das funcionalidades deverá ser atualizado conforme a versão atual da aplicação.

## 18. Licença

**Licença:** a definir pela autora.

Até que uma licença seja incluída no repositório, não se deve presumir que o projeto esteja publicado sob uma licença específica de código aberto.

---

## 🔗 Links do Projeto

- **Aplicação publicada:** [Sabor & Arte — Buffet e Eventos](https://sabor-arte-gamma.vercel.app/)
- **Repositório GitHub:** [AlanySouza2203/sabor-arte-eventos](https://github.com/AlanySouza2203/sabor-arte-eventos)
- **Documentação Node.js:** [nodejs.org](https://nodejs.org/)
- **Documentação Express:** [expressjs.com](https://expressjs.com/)
- **Documentação MySQL:** [mysql.com](https://www.mysql.com/)

---

© 2026 Sabor & Arte — Projeto individual de Alany Souza.
