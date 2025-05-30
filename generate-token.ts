const jwt = require('jsonwebtoken');
require('dotenv').config();

const token = jwt.sign(
  { userId: 'cmb9843i10001t4awd1cuts1w' },
  process.env.JWT_SECRET!,
  { expiresIn: '7d' }
);

console.log('✅ JWT Token:\n' + token);
