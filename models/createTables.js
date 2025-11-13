const db = require('../database/db');

const createTables = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS team (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      cargo TEXT NOT NULL,
      url_foto TEXT,
      bio_curta TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS metrics (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      valor TEXT NOT NULL,
      icone_svg TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS testimonials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      autor TEXT NOT NULL,
      relacao TEXT NOT NULL,
      texto TEXT NOT NULL,
      status TEXT DEFAULT 'pendente'
    )
  `);
};

module.exports = createTables;
