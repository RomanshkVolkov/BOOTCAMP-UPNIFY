import { UsersSchema } from "../models/schemas/users.schema.js";
import JWT from 'jsonwebtoken';

export async function getData(req, res) {
const response = await axios.get('https://api.upnify.com/comun/paises');
return res.json(response.data);
}

export async function getUsers(req, res) {
    const users = await UsersSchema.findAll();
    res.send(users);
    
}

export async function login (req, res) {
    const { email, password } = req.body;
    const user = await UsersSchema.findOne({
        where: {
            email: email,
            password: password
        }
    });
    console.log(user);
    if (!user) {
        res.send('Usuario no encontrado');
    }
    
    if (user.password !== password) res.send('Contraseña incorrecta');
    const { password: _, ...data } = user.toJSON();
    
    const token = JWT.sign(data, process.env.SECRET_KEY, { expiresIn: '7d'})

    res.send({ data, token });
}