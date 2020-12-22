const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { name } = request.body;
        await connection('composicao').insert({
            name,
        });
        return response.json(name);
    },

    async index(request, response) {
        const composicao = await connection('composicao').select('*');
        return response.json(composicao);
    },

    async update(request, response) {
        const { id, name } = request.body;
        if (!id) return res.status(404).json({})
        else {
            await connection('composicao')
                .where('id', '=', id)
                .update({
                    name
                });
            return response.status(200).send("OK");
        }
    },

    async dele(request, response) {
        const { id } = request.params;
        await connection('composicao')
            .where('id',id)
            .delete();
        
        return response.status(200).send("DELETE");
    }
};
