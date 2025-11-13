const db = require('../database/db');

// Listar todos os membros
exports.getAll = (req, res) => {
  db.query('SELECT * FROM team', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Buscar um membro por ID
exports.getById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM team WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'Membro não encontrado' });
    res.json(results[0]);
  });
};

// Criar novo membro
exports.create = (req, res) => {
  const { nome, cargo, url_foto, bio_curta } = req.body;
  if (!nome || !cargo) {
    return res.status(400).json({ error: 'Campos obrigatórios: nome, cargo' });
  }

  db.query(
    'INSERT INTO team (nome, cargo, url_foto, bio_curta) VALUES (?, ?, ?, ?)',
    [nome, cargo, url_foto, bio_curta],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId, message: 'Membro criado com sucesso' });
    }
  );
};

// Atualizar membro
exports.update = (req, res) => {
  const { id } = req.params;
  const { nome, cargo, url_foto, bio_curta } = req.body;

  db.query(
    'UPDATE team SET nome=?, cargo=?, url_foto=?, bio_curta=? WHERE id=?',
    [nome, cargo, url_foto, bio_curta, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0) return res.status(404).json({ error: 'Membro não encontrado' });
      res.json({ message: 'Membro atualizado com sucesso' });
    }
  );
};

// Deletar membro
exports.delete = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM team WHERE id=?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Membro não encontrado' });
    res.json({ message: 'Membro removido com sucesso' });
  });
};
