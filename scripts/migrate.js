const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

async function runMigration() {
  console.log('🔄 Iniciando migração do Banco de Dados...');

  const host = process.env.DB_HOST || 'localhost';
  const port = parseInt(process.env.DB_PORT || '3306', 10);
  const user = process.env.DB_USER || 'root';
  const password = process.env.DB_PASSWORD || '';
  const database = process.env.DB_NAME || 'buffet_db';
  const ssl = process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false;

  const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
    ssl,
    multipleStatements: true
  });

  try {
    console.log(`📡 Conectado ao servidor MySQL (${host})`);
    
    // Criar banco se não existir
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
    await connection.query(`USE \`${database}\`;`);
    console.log(`✅ Banco de dados '${database}' selecionado.`);

    const sqlFilePath = path.join(__dirname, '..', 'SABOR BUFFET SQL.sql');
    let sqlContent = fs.readFileSync(sqlFilePath, 'utf8');

    // Remover linhas de CREATE DATABASE / USE buffet_db se já tratadas
    sqlContent = sqlContent
      .replace(/CREATE\s+DATABASE\s+buffet_db;/gi, '')
      .replace(/USE\s+buffet_db;/gi, '');

    console.log('🚀 Executando scripts de criação de tabelas...');
    await connection.query(sqlContent);

    console.log('🎉 Migração concluída com sucesso!');
  } catch (error) {
    console.error('❌ Erro durante a migração:', error);
    process.exit(1);
  } finally {
    await connection.end();
  }
}

runMigration();
