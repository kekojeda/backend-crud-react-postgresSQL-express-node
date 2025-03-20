import { User } from '../schemas/User.js'
import bcrypt from 'bcrypt'
import { createAccesToken } from '../libs/jwt.js'


const signin = (req, res) => res.send('Ingresando')

const signup = async (req, res) => {
    const { name, password, email} = req.body

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
        name,
        password: hashedPassword,
        email
    })
    const token = await createAccesToken({id: newUser.id})

    res.cookie('token', token, {
        httpOnly: true,
        //secure: true,
        sameSite: 'none',
        maxAge: 24 * 60 * 60 * 1000 //24 hs
    })


    res.json({newUser})
}

const logout = (req, res) => res.send('saliendo de la cuenta')

const getProfile = (req, res) => res.send('informacion del user')

export { signin, signup, logout, getProfile}