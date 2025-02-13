const signin = (req, res) => res.send('Ingresando')

const signup = (req, res) => res.send('registrando usuario')

const logout = (req, res) => res.send('saliendo de la cuenta')

const getProfile = (req, res) => res.send('informacion del user')

export { signin, signup, logout, getProfile}