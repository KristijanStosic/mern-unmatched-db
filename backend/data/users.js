import bcrypt from 'bcryptjs';

const users = [
  {
    _id: '65c5036e0987d0b320ef6445',
    firstName: 'Kristijan',
    lastName: 'Stošić',
    email: 'kristijan@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
    createdAt: '08-02-2024'
  },
];

export default users;