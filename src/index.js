import app from './app.js' 
import { sequelize } from "./database/db.js";


const main = async () => {
    try {
        await sequelize.sync()
        app.listen(3001)
        console.log('Server is listening on port 3001');
    } catch (error) {
        console.log('Connection error', error);
    }
}


main()