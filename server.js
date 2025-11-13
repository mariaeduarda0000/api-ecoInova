require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/team', require('./routes/teamRoutes'));
app.use('/api/metrics', require('./routes/metricsRoutes'));
app.use('/api/testimonials', require('./routes/testimonialsRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando em http://localhost:${PORT}`));
