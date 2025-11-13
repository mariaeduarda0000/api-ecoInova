const db = require('../database/db');

// Listar métricas
exports.getAll = (req, res) => {
  db.query('SELECT * FROM metrics', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Criar métrica
exports.create = (req, res) => {
  const { titulo, valor, icone_svg } = req.body;
  if (!titulo || !valor) {
    return res.status(400).json({ error: 'Campos obrigatórios: titulo, valor' });
  }

  db.query(
    'INSERT INTO metrics (titulo, valor, icone_svg) VALUES (?, ?, ?)',
    [titulo, valor, icone_svg],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId, message: 'Métrica criada com sucesso' });
    }
  );
};

// Atualizar métrica
exports.update = (req, res) => {
  const { id } = req.params;
  const { titulo, valor, icone_svg } = req.body;

  db.query(
    'UPDATE metrics SET titulo=?, valor=?, icone_svg=? WHERE id=?',
    [titulo, valor, icone_svg, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0) return res.status(404).json({ error: 'Métrica não encontrada' });
      res.json({ message: 'Métrica atualizada com sucesso' });
    }
  );
};
