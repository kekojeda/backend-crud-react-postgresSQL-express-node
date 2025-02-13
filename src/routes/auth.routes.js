import { Router } from "express"

const router = Router();


router.post('/signin', (req, res) => res.send('Ingresando'))

router.post('/signnup', (req, res) => res.send('registrando usuario'))

router.post('/logout', (req, res) => res.send('saliendo de la cuenta'))

router.get('/profile', (req, res) => res.send('informacion del user'))





export default router