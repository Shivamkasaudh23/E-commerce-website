import bcrypt from 'bcryptjs'

const users =[
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password:  bcrypt.hashSync('123456',10),
        isAdmin : true
    },
    {
        name: 'John Cena',
        email: 'johncena@example.com',
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: 'Baran Corban',
        email: 'barancorban@example.com',
        password: bcrypt.hashSync('123456',10),
    },
]

export default users