import bcrypt from 'bcryptjs'

const users = [
    {
        name: "Admin User",
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: "Abhishek Ojha",
        email: 'abhi@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: "Gojo",
        email: 'gojo@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    }
]

export default users
