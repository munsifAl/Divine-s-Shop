import bcrypt from 'bcryptjs'


const users = [
     {
          name: 'Admin User',
          email: 'admin@example.com',
          password: bcrypt.hashSync('123456', 10),
          isAdmin: true
     },
     {
          name: 'Jameel',
          email: 'jameel@example.com',
          password:  bcrypt.hashSync('123456', 10),
       
     },
     {
          name: 'Ramiz',
          email: 'ramiz@example.com',
          password:  bcrypt.hashSync('123456', 10),
       
     },

]
export default users