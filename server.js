const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Funções utilitárias
function ensureFileExists(filePath) {
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, '[]');
  }
}

function readJSON(filePath) {
  ensureFileExists(filePath);
  return JSON.parse(fs.readFileSync(filePath));
}

function writeJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Caminhos dos arquivos
const usersFile = path.join(__dirname, 'db', 'users.json');
const restaurantsFile = path.join(__dirname, 'db', 'restaurants.json');

// Rota para acessar os usuários
app.get('/db/users.json', (req, res) => {
  res.json(readJSON(usersFile));
});

// Rota para acessar os restaurantes
app.get('/db/restaurants.json', (req, res) => {
  res.json(readJSON(restaurantsFile));
});

// Rotas para cadastro
app.post('/users/register', (req, res) => {
  console.log('[POST] /users/register', req.body);
  const users = readJSON(usersFile);
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  writeJSON(usersFile, users);
  res.status(201).json(newUser);
});

app.post('/restaurants/register', (req, res) => {
  console.log('[POST] /restaurants/register', req.body);
  const restaurants = readJSON(restaurantsFile);
  const newRest = { id: Date.now(), ...req.body };
  restaurants.push(newRest);
  writeJSON(restaurantsFile, restaurants);
  res.status(201).json(newRest);
});

// Rota de login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = readJSON(usersFile);
  const user = users.find(u => u.email === email && u.password === password);
  if (user) res.json({ message: 'Login bem-sucedido', user });
  else res.status(401).json({ message: 'Credenciais inválidas' });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
