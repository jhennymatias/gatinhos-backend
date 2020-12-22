const connection = require('../database/connection');
const crypto = require('crypto');
const localFunctions = require('../utils/criptoPassword');
const encryptPassword = localFunctions.encryptPassword;
const localFunctionsEmail = require('../utils/email');
const sendEmails = localFunctionsEmail.sendEmails;

module.exports = {
    async create(request, response) {
        const { name, email, password } = request.body;
        const hashPassword = encryptPassword(password).split(':');
        const hash = hashPassword[0];
        const Criptpassword = hashPassword[1];
        await connection('user').insert({
            name,
            email,
            password: Criptpassword,
            hash,
        });

        return response.json(name);
    },

    async index(request, response) {
        const users = await connection('user').select('*');
        return response.json(users);
    },

    async updatePassword(request, response) {
        const email = request.params.email;
        const newPassword = crypto.randomBytes(4).toString('HEX');
        const hashPassword = encryptPassword(newPassword).split(':');
        const hashNewPassword = hashPassword[0];
        const CriptNewPassword = hashPassword[1];

        if (!email) return res.status(404).json({})
        else {
            sendEmails(email, "Change your password", "Your new password is: " + newPassword +"\n Survey Covid-19")
            await connection('user')
                .where('email', '=', email)
                .update({ password: CriptNewPassword, hash: hashNewPassword });
            return response.status(200).send("OK");
        }
    }
};