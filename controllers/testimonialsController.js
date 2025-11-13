const db = require('../database/db');

// Listar apenas aprovados (público)
exports.getPublic = (req, res) => {
  db.query('SELECT * FROM testimonials WHERE status = "aprovado"', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Listar todos (admin)
exports.getAdmin = (req, res) => {
  db.query('SELECT * FROM testimonials', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Criar novo depoimento (status padrão pendente)
exports.create = (req, res) => {
  const { autor, relacao, texto } = req.body;
  if (!autor || !relacao || !texto) {
    return res.status(400).json({ error: 'Campos obrigatórios: autor, relacao, texto' });
  }

  db.query(
    'INSERT INTO testimonials (autor, relacao, texto, status) VALUES (?, ?, ?, "pendente")',
    [autor, relacao, texto],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId, message: 'Depoimento enviado e pendente de aprovação' });
    }
  );
};

// Aprovar depoimento
exports.approve = (req, res) => {
  const { id } = req.params;
  db.query(
    'UPDATE testimonials SET status = "aprovado" WHERE id = ?',
    [id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0) return res.status(404).json({ error: 'Depoimento não encontrado' });
      res.json({ message: 'Depoimento aprovado com sucesso' });
    }
  );
};

// Deletar (rejeitar) depoimento
exports.delete = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM testimonials WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Depoimento não encontrado' });
    res.json({ message: 'Depoimento removido com sucesso' });
  });
};
