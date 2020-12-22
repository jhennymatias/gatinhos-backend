const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { name, care } = request.body;
        await connection('animal').insert({
            name,
            care,
        });
        return response.json(name);
    },

    async index(request, response) {
        const animal = await connection('animal').select('*');
        return response.json(animal);
    },

    async update(request, response) {
        const { id, name, care } = request.body;
        if (!id) return res.status(404).json({})
        else {
            await connection('animal')
                .where('id', '=', id)
                .update({
                    name,
                    care,
                });
            return response.status(200).send("OK");
        }
    },

    async dele(request, response) {
        const { id } = request.params;
        await connection('animal')
            .where('id',id)
            .delete();
        
        return response.status(200).send("DELETE");
    }
};
