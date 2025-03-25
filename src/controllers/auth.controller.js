import { User } from '../schemas/User.js'
import bcrypt from 'bcrypt'
import { createAccesToken } from '../libs/jwt.js'


// const signin = async (req, res) => {
//     const {email, password} = req.body

//     const user = await User.findOne({email})

//     if(!user) return res.status(400).json({message: ' no existe el usuario'})

//     const validPassword = await bcrypt.compare(password, user.password)

//     if(!validPassword) return res.status(400).json({message: 'password incorrecto'})

//     const token = await createAccesToken({id: user.id})

//     res.cookie('token', token, {
//         httpOnly: true,
//         //secure: true,
//         sameSite: 'none',
//         maxAge: 24 * 60 * 60 * 1000 //24 hs
//     })


//     res.json({user})


// }

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log(email);
        console.log(password);
        

        if (!email || !password) {
            return res.status(400).json({ message: "Email y contraseña son obligatorios" });
        }
        
        const user = await User.findOne({ email });
        console.log("Usuario encontrado")
        console.log(user);
        

        if (!user) {
            return res.status(400).json({ message: "No existe el usuario" });
        }

        console.log("Usuario encontrado:", user);
        console.log("Contraseña almacenada:", user.password);

        if (!user.password) {
            return res.status(500).json({ message: "Error interno: el usuario no tiene contraseña almacenada" });
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).json({ message: "Contraseña incorrecta" });
        }

        const token = await createAccesToken({ id: user.id });

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "none",
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.json({ user });
    } catch (error) {
        console.error("Error en signin:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};


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

const logout = (req, res) => {
    res.clearCookie('token')
    res.sendStatus(200)
}

const getProfile = async (req, res) => {

    const user = await User.findByPk(req.userId)

    return res.json({user})
    
}

export { signin, signup, logout, getProfile}