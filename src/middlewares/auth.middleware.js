import jwt from 'jsonwebtoken'

export const isAuth = (req, res, next) => {

    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({
            status: "error",
            message: "no token provided"
        })
    }

    jwt.verify(token, "secretKeyStingPonerUnoLargo", (err, decoded) => {
        if (err) {
            return res.status(401).json({
                message: "no estas autorizado"
            })
        }
        req.userId = decoded.id
       
        next()
    })

}