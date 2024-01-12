const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors'); 

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const users = [
  { id: 1, username: 'user', password: bcrypt.hashSync('123', 10) }
];

const generateToken = (user) => {
  return jwt.sign({ userId: user.id, username: user.username }, 'secretKey', { expiresIn: '1h' });
};

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
  
    console.log('Received login request:', username, password);
    console.log('User found:', user);
  
    if (user) {
      console.log('Comparing passwords:', password, user.password);
      if (bcrypt.compareSync(password, user.password)) {
        console.log('Password matched');
        const token = generateToken(user);
        res.json({ token });
      } else {
        console.log('Invalid password');
        res.status(401).json({ message: 'Invalid password' });
      }
    } else {
      console.log('User not found');
      res.status(401).json({ message: 'User not found' });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
