const connection = require('../database/connection');
const localFunctions = require('../utils/criptoPassword');
const decryptPassword = localFunctions.decryptPassword;

module.exports = {
    async create(request, response) {
        const { LoginEmail, LoginPassword } = request.body;
        const user = await connection('user')
            .where('email','=', LoginEmail)
            .select('*')
            .first();
        const { hash, password } = user;
        const comparePassword = decryptPassword(hash + ':' + password);
        if (LoginPassword === comparePassword) {
            response.json(user)

        } else {
            response.status(400).json({ error: "Wrong password" })
        }
    }

}